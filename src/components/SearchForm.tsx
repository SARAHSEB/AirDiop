import React, { useState } from 'react';
import { Search, ArrowRightLeft, Calendar, Users, MapPin } from 'lucide-react';
import { SearchFilters } from '../types/flight';

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    from: '',
    to: '',
    departureDate: undefined,
    returnDate: undefined,
    passengers: 1,
    isRoundTrip: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const swapCities = () => {
    setFilters(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  const formatDateForInput = (date: Date | undefined) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setFilters(prev => ({ ...prev, isRoundTrip: false }))}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            !filters.isRoundTrip
              ? 'bg-sky-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Aller simple
        </button>
        <button
          onClick={() => setFilters(prev => ({ ...prev, isRoundTrip: true }))}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filters.isRoundTrip
              ? 'bg-sky-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Aller-retour
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* From */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              De
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={filters.from}
                onChange={(e) => setFilters(prev => ({ ...prev, from: e.target.value }))}
                placeholder="Ville de départ"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                required
              />
            </div>
          </div>

          {/* Swap & To */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vers
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={filters.to}
                onChange={(e) => setFilters(prev => ({ ...prev, to: e.target.value }))}
                placeholder="Ville d'arrivée"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                required
              />
              <button
                type="button"
                onClick={swapCities}
                className="absolute right-3 top-3 p-1 text-gray-400 hover:text-sky-500 transition-colors"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Departure Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Départ
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={formatDateForInput(filters.departureDate)}
                onChange={(e) => setFilters(prev => ({ 
                  ...prev, 
                  departureDate: e.target.value ? new Date(e.target.value) : undefined 
                }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                required
              />
            </div>
          </div>

          {/* Return Date */}
          {filters.isRoundTrip && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Retour
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={formatDateForInput(filters.returnDate)}
                  onChange={(e) => setFilters(prev => ({ 
                    ...prev, 
                    returnDate: e.target.value ? new Date(e.target.value) : undefined 
                  }))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  min={formatDateForInput(filters.departureDate)}
                />
              </div>
            </div>
          )}

          {/* Passengers */}
          <div className={filters.isRoundTrip ? '' : 'lg:col-start-4'}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passagers
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={filters.passengers}
                onChange={(e) => setFilters(prev => ({ ...prev, passengers: Number(e.target.value) }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'passager' : 'passagers'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="flex items-center space-x-2 px-8 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium"
          >
            <Search className="w-5 h-5" />
            <span>Rechercher des vols</span>
          </button>
        </div>
      </form>
    </div>
  );
};