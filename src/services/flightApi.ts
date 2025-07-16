const API_KEY = process.env.NEXT_PUBLIC_FLIGHT_API_KEY;
const BASE_URL = 'https://api.aviationstack.com/v1'; // HTTPS recommandé

export interface AviationStackFlight {
  // ... (inchangé)
  flight_date: string;
  flight_status: string;
  departure: {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string;
    gate: string;
    delay: number;
    scheduled: string;
    estimated: string;
    actual: string;
    estimated_runway: string;
    actual_runway: string;
  };
  arrival: {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string;
    gate: string;
    baggage: string;
    delay: number;
    scheduled: string;
    estimated: string;
    actual: string;
    estimated_runway: string;
    actual_runway: string;
  };
  airline: {
    name: string;
    iata: string;
    icao: string;
  };
  flight: {
    number: string;
    iata: string;
    icao: string;
    codeshared: any;
  };
  aircraft: {
    registration: string;
    iata: string;
    icao: string;
    icao24: string;
  };
  live: {
    updated: string;
    latitude: number;
    longitude: number;
    altitude: number;
    direction: number;
    speed_horizontal: number;
    speed_vertical: number;
    is_ground: boolean;
  };
}

export async function searchFlights(params: {
  dep_iata?: string;
  arr_iata?: string;
  // SUPPRIME flight_date
  // airline_name?: string; // optionnel, mais peu fiable avec la version gratuite
  flight_status?: string; // "active", "landed", "scheduled"
}) {
  if (!API_KEY) {
    throw new Error('Clé API AviationStack manquante. Veuillez configurer NEXT_PUBLIC_FLIGHT_API_KEY dans votre fichier .env.local');
  }

  // Filtre : ne garde que les paramètres autorisés
  const safeParams: any = {
    access_key: API_KEY,
    limit: '100',
  };
  if (params.dep_iata) safeParams.dep_iata = params.dep_iata;
  if (params.arr_iata) safeParams.arr_iata = params.arr_iata;
  if (params.flight_status) safeParams.flight_status = params.flight_status;

  const query = new URLSearchParams(safeParams);

  try {
    const response = await fetch(`${BASE_URL}/flights?${query}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || `Erreur API: ${response.status}`);
    }

    if (data.error) {
      throw new Error(data.error.message || 'Erreur API inconnue');
    }

    return data.data || []; // renvoie uniquement le tableau de vols
  } catch (error) {
    console.error('Erreur lors de la recherche de vols:', error);
    throw error;
  }
}

// Fonction pour obtenir les aéroports par ville/pays (inchangée)
export async function searchAirports(query: string) {
  if (!API_KEY) {
    throw new Error('Clé API AviationStack manquante');
  }

  const params = new URLSearchParams({
    access_key: API_KEY,
    search: query,
    limit: '10'
  });

  try {
    const response = await fetch(`${BASE_URL}/airports?${params}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || `Erreur API: ${response.status}`);
    }

    return data.data || [];
  } catch (error) {
    console.error('Erreur lors de la recherche d\'aéroports:', error);
    throw error;
  }
}
