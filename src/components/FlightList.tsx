import React from 'react';
import { Flight } from '../types/flight';
import { FlightCard } from './FlightCard';
import { Plane, Search } from 'lucide-react';

interface FlightListProps {
  flights: Flight[];
  loading: boolean;
  onSelectFlight: (flight: Flight) => void;
}

export const FlightList: React.FC<FlightListProps> = ({ flights, loading, onSelectFlight }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
        <span className="ml-3 text-gray-600">Recherche des vols...</span>
      </div>
    );
  }

  if (flights.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun vol trouvé</h3>
        <p className="text-gray-600">
          Essayez de modifier vos critères de recherche ou vos filtres.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {flights.length} vol{flights.length > 1 ? 's' : ''} trouvé{flights.length > 1 ? 's' : ''}
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Plane className="w-4 h-4" />
          <span>Tarifs incluant taxes et frais</span>
        </div>
      </div>

      <div className="space-y-4">
        {flights.map(flight => (
          <FlightCard
            key={flight.id}
            flight={flight}
            onSelect={onSelectFlight}
          />
        ))}
      </div>
    </div>
  );
};