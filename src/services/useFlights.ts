import { useState } from 'react';
import { Flight, SearchFilters, FlightFilters } from '../types/flight';
import { searchFlights as apiSearchFlights } from './flightApi';
import { mapMultipleFlights } from './flightMapper';

// Mapping des villes vers les codes IATA
const CITY_TO_IATA: { [key: string]: string } = {
  'paris': 'CDG',
  'londres': 'LHR',
  'london': 'LHR',
  'new york': 'JFK',
  'newyork': 'JFK',
  'los angeles': 'LAX',
  'losangeles': 'LAX',
  'dubai': 'DXB',
  'dubaï': 'DXB',
  'tokyo': 'NRT',
  'sydney': 'SYD',
  'francfort': 'FRA',
  'frankfurt': 'FRA',
  'amsterdam': 'AMS',
  'madrid': 'MAD',
  'rome': 'FCO',
  'istanbul': 'IST',
  'singapore': 'SIN',
  'singapour': 'SIN',
  'hong kong': 'HKG',
  'hongkong': 'HKG',
  'barcelone': 'BCN',
  'barcelona': 'BCN',
  'munich': 'MUC',
  'zurich': 'ZUR',
  'vienne': 'VIE',
  'vienna': 'VIE',
  'bruxelles': 'BRU',
  'brussels': 'BRU',
  'copenhague': 'CPH',
  'copenhagen': 'CPH',
  'milan': 'MXP',
  'milano': 'MXP',
  'berlin': 'BER',
  'stockholm': 'ARN',
  'oslo': 'OSL',
  'helsinki': 'HEL'
};

function getCityIATA(cityName: string): string | undefined {
  const normalized = cityName.toLowerCase().trim();
  return CITY_TO_IATA[normalized];
}

export const useFlights = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchFlights = async (searchFilters: SearchFilters) => {
    setLoading(true);
    setError(null);

    try {
      // Convertir les noms de villes en codes IATA
      const depIATA = getCityIATA(searchFilters.from);
      const arrIATA = getCityIATA(searchFilters.to);

      // Vérifier que les codes IATA sont trouvés
      if (!depIATA || !arrIATA) {
        const supportedCities = Object.keys(CITY_TO_IATA).join(', ');
        throw new Error(
          `Ville non reconnue. Villes supportées : ${supportedCities.substring(0, 100)}...`
        );
      }

      const apiParams: any = {
        dep_iata: depIATA,
        arr_iata: arrIATA,
        limit: '50'
      };

      // Ajouter la date si fournie
      if (searchFilters.departureDate) {
        const dateStr = searchFilters.departureDate.toISOString().split('T')[0];
        apiParams.flight_date = dateStr;
      }

      console.log('Recherche avec l\'API AviationStack:', apiParams);
      const apiData = await apiSearchFlights(apiParams);
      let results = mapMultipleFlights(apiData);
      
      console.log(`API a retourné ${results.length} vols`);

      // Filtrer par nombre de passagers
      results = results.filter(flight => flight.availableSeats >= searchFilters.passengers);

      // Trier par prix par défaut
      results.sort((a, b) => a.price - b.price);

      setFlights(results);
      setFilteredFlights(results);

      if (results.length === 0) {
        setError('Aucun vol trouvé pour ces critères. Essayez une autre date ou d\'autres villes.');
      }

    } catch (err) {
      console.error('Erreur lors de la recherche des vols:', err);
      setError(err instanceof Error ? err.message : 'Erreur lors de la recherche des vols');
      setFlights([]);
      setFilteredFlights([]);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = (filters: FlightFilters) => {
    let filtered = [...flights];

    // Filtrer par prix
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(flight => flight.price <= filters.maxPrice!);
    }

    // Filtrer par escales
    if (filters.maxStops !== undefined) {
      filtered = filtered.filter(flight => flight.stops <= filters.maxStops!);
    }

    // Filtrer par compagnies
    if (filters.airlines && filters.airlines.length > 0) {
      filtered = filtered.filter(flight => filters.airlines!.includes(flight.airline));
    }

    // Trier
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (filters.sortBy) {
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'duration':
          comparison = a.duration - b.duration;
          break;
        case 'departure':
          comparison = new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime();
          break;
      }

      return filters.sortOrder === 'desc' ? -comparison : comparison;
    });

    setFilteredFlights(filtered);
  };

  const getUniqueAirlines = () => {
    return [...new Set(flights.map(flight => flight.airline))];
  };

  const getMaxPrice = () => {
    return Math.max(...flights.map(flight => flight.price), 0);
  };

  return {
    flights: filteredFlights,
    loading,
    error,
    searchFlights,
    applyFilters,
    getUniqueAirlines,
    getMaxPrice
  };
};