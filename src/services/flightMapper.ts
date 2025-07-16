import { Flight } from '../types/flight';
import { AviationStackFlight } from './flightApi';

// Mapping des codes IATA vers les noms de villes
const IATA_TO_CITY: { [key: string]: string } = {
  // Europe & existants
  'CDG': 'Paris',
  'ORY': 'Paris',
  'LHR': 'Londres',
  'LGW': 'Londres',
  'JFK': 'New York',
  'LAX': 'Los Angeles',
  'DXB': 'Dubaï',
  'NRT': 'Tokyo',
  'HND': 'Tokyo',
  'SYD': 'Sydney',
  'FRA': 'Francfort',
  'AMS': 'Amsterdam',
  'MAD': 'Madrid',
  'FCO': 'Rome',
  'IST': 'Istanbul',
  'SIN': 'Singapour',
  'HKG': 'Hong Kong',
  'BCN': 'Barcelone',
  'MUC': 'Munich',
  'ZUR': 'Zurich',
  'VIE': 'Vienne',
  'BRU': 'Bruxelles',
  'CPH': 'Copenhague',
  'ARN': 'Stockholm',
  'OSL': 'Oslo',
  'HEL': 'Helsinki',
  // +30 AJOUTÉS
  'ATH': 'Athènes',
  'DUB': 'Dublin',
  'SVO': 'Moscou',
  'VKO': 'Moscou',
  'LED': 'Saint-Pétersbourg',
  'GVA': 'Genève',
  'LIS': 'Lisbonne',
  'PRG': 'Prague',
  'WAW': 'Varsovie',
  'BUD': 'Budapest',
  'KBP': 'Kyiv',
  'DME': 'Moscou',
  'DOH': 'Doha',
  'JNB': 'Johannesburg',
  'CAI': 'Le Caire',
  'CMN': 'Casablanca',
  'ALG': 'Alger',
  'NBO': 'Nairobi',
  'CPT': 'Le Cap',
  'MEX': 'Mexico',
  'GRU': 'São Paulo',
  'EZE': 'Buenos Aires',
  'YYZ': 'Toronto',
  'YVR': 'Vancouver',
  'YUL': 'Montréal',
  'SFO': 'San Francisco',
  'MIA': 'Miami',
  'ORD': 'Chicago',
  'SEA': 'Seattle',
  'BOM': 'Mumbai',
  'DEL': 'Delhi',
  'PEK': 'Pékin',
  'PVG': 'Shanghai',
  'ICN': 'Séoul',
  'KUL': 'Kuala Lumpur',
  'BKK': 'Bangkok',
  'MEL': 'Melbourne',
  'AKL': 'Auckland',
  'AUH': 'Abu Dhabi',
  'JED': 'Djeddah',
  'RUH': 'Riyad',
  'LIM': 'Lima',
  'SCL': 'Santiago',
  'LGA': 'New York (LaGuardia)',
  'EWR': 'New York (Newark)',
  'TXL': 'Berlin',
  'TLV': 'Tel Aviv'
};

// Fonction pour obtenir le nom de la ville à partir du code IATA
function getCityFromIATA(iata: string): string {
  return IATA_TO_CITY[iata] || iata;
}

// Fonction pour calculer la durée de vol en minutes
function calculateDuration(departure: string, arrival: string): number {
  if (!departure || !arrival) return 120; // Durée par défaut de 2h

  const depTime = new Date(departure);
  const arrTime = new Date(arrival);
  
  if (isNaN(depTime.getTime()) || isNaN(arrTime.getTime())) {
    return 120; // Durée par défaut si les dates sont invalides
  }

  const diffMs = arrTime.getTime() - depTime.getTime();
  return Math.max(Math.round(diffMs / (1000 * 60)), 30); // Minimum 30 minutes
}

// Fonction pour générer un prix aléatoire basé sur la distance/durée
function generatePrice(duration: number, airline: string): number {
  const basePrice = Math.max(duration * 0.8, 150); // Prix de base selon la durée
  const airlineMultiplier = airline.toLowerCase().includes('emirates') || 
                           airline.toLowerCase().includes('qatar') ? 1.5 : 1.0;
  const randomFactor = 0.8 + Math.random() * 0.4; // Variation de ±20%
  
  return Math.round(basePrice * airlineMultiplier * randomFactor);
}

// Fonction pour estimer le nombre d'escales
function estimateStops(duration: number): number {
  if (duration < 180) return 0; // Moins de 3h = direct
  if (duration < 480) return Math.random() < 0.7 ? 0 : 1; // 3-8h = souvent direct
  if (duration < 720) return Math.random() < 0.5 ? 1 : 2; // 8-12h = 1-2 escales
  return Math.floor(Math.random() * 2) + 1; // Plus de 12h = 1-2 escales
}

export function mapAviationStackToFlight(apiData: AviationStackFlight): Flight | null {
  try {
    if (!apiData.departure?.iata || !apiData.arrival?.iata || !apiData.airline?.name) {
      return null;
    }

    const departureDate = new Date(apiData.departure.scheduled || apiData.departure.estimated);
    const arrivalDate = new Date(apiData.arrival.scheduled || apiData.arrival.estimated);

    if (isNaN(departureDate.getTime()) || isNaN(arrivalDate.getTime())) {
      return null;
    }

    const duration = calculateDuration(
      apiData.departure.scheduled || apiData.departure.estimated,
      apiData.arrival.scheduled || apiData.arrival.estimated
    );

    const price = generatePrice(duration, apiData.airline.name);
    const stops = estimateStops(duration);

    return {
      id: `${apiData.flight.iata || apiData.flight.number}-${apiData.flight_date}`,
      airline: apiData.airline.name,
      flightNumber: apiData.flight.iata || apiData.flight.number,
      from: getCityFromIATA(apiData.departure.iata),
      to: getCityFromIATA(apiData.arrival.iata),
      departureDate,
      arrivalDate,
      price,
      duration,
      stops,
      aircraft: apiData.aircraft?.iata || 'N/A',
      availableSeats: Math.floor(Math.random() * 200) + 50,

      // Ajout pour la flèche déroulante :
      status: apiData.flight_status || "",
      departureTerminal: apiData.departure?.terminal || "",
      departureGate: apiData.departure?.gate || "",
      departureDelay: apiData.departure?.delay ?? null,
      arrivalGate: apiData.arrival?.gate || "",
      arrivalBaggage: apiData.arrival?.baggage || "",
      latitude: apiData.live?.latitude ?? null,
      longitude: apiData.live?.longitude ?? null,
    };
  } catch (error) {
    console.error('Erreur lors du mapping des données de vol:', error);
    return null;
  }
}

export function mapMultipleFlights(apiDataArray: AviationStackFlight[]): Flight[] {
  return apiDataArray
    .map(mapAviationStackToFlight)
    .filter((flight): flight is Flight => flight !== null);
}