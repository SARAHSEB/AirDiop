'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';
import { FlightFiltersComponent } from '../components/FlightFilters';
import { FlightList } from '../components/FlightList';
import { useFlights } from '../services/useFlights';
import { SearchFilters, FlightFilters, Flight } from '../types/flight';
import { Plane } from 'lucide-react';
import PopUpNotConnected from "../components/PopUpNotConnected";

const images = [
  '/backgrounds/imgback01.jpg',
  '/backgrounds/imgback02.jpeg',
  '/backgrounds/imgback03.jpeg',
  '/backgrounds/imgback04.jpeg',
  '/backgrounds/imgback05.jpg'
];

export default function HomePage() {
  const [searchActive, setSearchActive] = useState(false);
  const [filters, setFilters] = useState<FlightFilters>({
    sortBy: 'price',
    sortOrder: 'asc'
  });

  const [bgIndex, setBgIndex] = useState(0);

  


  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const {
    flights,
    loading,
    error,
    searchFlights,
    applyFilters,
    getUniqueAirlines,
    getMaxPrice
  } = useFlights();

  const handleSearch = useCallback(
    async (searchFilters: SearchFilters) => {
      await searchFlights(searchFilters);
      setSearchActive(true);
      applyFilters(filters);
    },
    [searchFlights, applyFilters, filters]
  );

  const handleFiltersChange = useCallback(
    (newFilters: FlightFilters) => {
      setFilters(newFilters);
      if (searchActive) applyFilters(newFilters);
    },
    [applyFilters, searchActive]
  );

  const handleSelectFlight = useCallback((flight: Flight) => {
    alert(
      `Vol sélectionné : ${flight.airline} ${flight.flightNumber} - ${flight.price}€`
    );
  }, []);

  return (

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

      <PopUpNotConnected />
      {/* Toggle dark mode dans le header */}
      <Header />
        
      

  

      {/* Hero section */}
      <div
        className="relative text-white py-16 transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay pour garder le texte lisible */}
        <div className="absolute inset-0 bg-sky-900/50 dark:bg-black/60 pointer-events-none transition-colors" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg dark:text-yellow-100">
              Trouvez votre vol idéal
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto dark:text-yellow-50">
              Comparez les prix de centaines de compagnies aériennes et trouvez
              les meilleures offres pour votre prochain voyage.
            </p>
          </div>

          <SearchForm onSearch={handleSearch} />
        </div>
      </div>

      {/* Results section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-100 px-4 py-3 rounded mb-6 transition-colors">
            {error}
          </div>
        )}

        {searchActive ? (
          <>
            <FlightFiltersComponent
              filters={filters}
              onFiltersChange={handleFiltersChange}
              airlines={getUniqueAirlines()}
              maxPrice={getMaxPrice()}
            />

            <FlightList
              flights={flights}
              loading={loading}
              onSelectFlight={handleSelectFlight}
            />
          </>
        ) : (
          <div className="text-center py-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-sky-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <Plane className="w-10 h-10 text-sky-500 dark:text-yellow-300" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Prêt à décoller ?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              Utilisez le formulaire de recherche ci-dessus pour trouver les
              meilleurs vols selon vos critères.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
