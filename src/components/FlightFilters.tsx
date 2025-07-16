import React from 'react';
import { Filter } from 'lucide-react';
import { FlightFilters } from '../types/flight';

interface FlightFiltersProps {
  filters: FlightFilters;
  onFiltersChange: (filters: FlightFilters) => void;
  airlines: string[];
  maxPrice: number;
}

export const FlightFiltersComponent: React.FC<FlightFiltersProps> = ({
  filters,
  onFiltersChange,
  airlines,
  maxPrice
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filtres</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Tri */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trier par
          </label>
          <select
            value={`${filters.sortBy}-${filters.sortOrder}`}
            onChange={(e) => {
              const [sortBy, sortOrder] = e.target.value.split('-') as [typeof filters.sortBy, typeof filters.sortOrder];
              onFiltersChange({ ...filters, sortBy, sortOrder });
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          >
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="duration-asc">Durée croissante</option>
            <option value="duration-desc">Durée décroissante</option>
            <option value="departure-asc">Départ tôt</option>
            <option value="departure-desc">Départ tard</option>
          </select>
        </div>

        {/* Prix maximum */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prix maximum: {filters.maxPrice || maxPrice}€
          </label>
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={filters.maxPrice || maxPrice}
            onChange={(e) => onFiltersChange({ ...filters, maxPrice: Number(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Escales maximum */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Escales maximum
          </label>
          <select
            value={filters.maxStops || ''}
            onChange={(e) => onFiltersChange({ 
              ...filters, 
              maxStops: e.target.value ? Number(e.target.value) : undefined 
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          >
            <option value="">Toutes</option>
            <option value="0">Vol direct</option>
            <option value="1">Maximum 1 escale</option>
            <option value="2">Maximum 2 escales</option>
          </select>
        </div>

        {/* Compagnies */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Compagnies
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {airlines.map(airline => (
              <label key={airline} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.airlines?.includes(airline) || false}
                  onChange={(e) => {
                    const currentAirlines = filters.airlines || [];
                    const newAirlines = e.target.checked
                      ? [...currentAirlines, airline]
                      : currentAirlines.filter(a => a !== airline);
                    onFiltersChange({ 
                      ...filters, 
                      airlines: newAirlines.length > 0 ? newAirlines : undefined 
                    });
                  }}
                  className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500"
                />
                <span className="text-sm text-gray-700">{airline}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};