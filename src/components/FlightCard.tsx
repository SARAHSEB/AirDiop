"use client";
import { Plane, Clock, MapPin, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Flight } from '../types/flight';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import React, { useState } from 'react';
interface FlightCardProps {
  flight: Flight;
  onSelect: (flight: Flight) => void;
}

export const FlightCard: React.FC<FlightCardProps> = ({ flight, onSelect }) => {
   const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
   const [expanded, setExpanded] = useState(false);
  
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const getStopsText = (stops: number) => {
    if (stops === 0) return 'Direct';
    if (stops === 1) return '1 escale';
    return `${stops} escales`;
  };

   const handleSelect = async () => {
    setLoading(true);
    setMsg(null);

    try {
      // 1. Récupère l'utilisateur connecté via l'API
      const resUser = await fetch('/api/user-status', { credentials: "include" });
      if (!resUser.ok) throw new Error("Utilisateur non connecté.");
      const { user } = await resUser.json();
      if (!user?.id) throw new Error("Impossible de récupérer l'identité utilisateur.");

      // 2. Envoie la réservation
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          flightId: flight.flightNumber || flight.flight_id, // adapte selon ton type
          airline: flight.airline,
          departure: `${flight.from} - ${format(new Date(flight.departureDate), 'yyyy-MM-dd HH:mm')}`,
          arrival: `${flight.to} - ${format(new Date(flight.arrivalDate), 'yyyy-MM-dd HH:mm')}`,
        })
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Échec de la réservation.");
      setMsg("Réservation réussie !");
    } catch (e: any) {
      setMsg(e.message || "Erreur lors de la réservation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 mb-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                <Plane className="w-4 h-4 text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{flight.airline}</p>
                <p className="text-sm text-gray-600">{flight.flightNumber}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{flight.aircraft}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{flight.availableSeats} places</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Départ */}
            <div className="flex items-center space-x-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {format(new Date(flight.departureDate), 'HH:mm')}
                </p>
                <p className="text-sm text-gray-600">
                  {format(new Date(flight.departureDate), 'dd MMM', { locale: fr })}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">{flight.from}</span>
              </div>
            </div>

            {/* Durée et escales */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="flex-1 h-0.5 bg-gray-300"></div>
                <Plane className="w-4 h-4 text-gray-400" />
                <div className="flex-1 h-0.5 bg-gray-300"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{formatDuration(flight.duration)}</span>
                </p>
                <p className="text-xs text-gray-500">{getStopsText(flight.stops)}</p>
              </div>
            </div>

            {/* Arrivée */}
            <div className="flex items-center space-x-3 justify-end">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">{flight.to}</span>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {format(new Date(flight.arrivalDate), 'HH:mm')}
                </p>
                <p className="text-sm text-gray-600">
                  {format(new Date(flight.arrivalDate), 'dd MMM', { locale: fr })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2 lg:ml-6">
          <div className="text-right">
            <p className="text-3xl font-bold text-gray-900">{flight.price}€</p>
            <p className="text-sm text-gray-600">par personne</p>
          </div>
          <button
            onClick={handleSelect}
          disabled={loading}
            className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium"
          >
            Sélectionner
          </button>
          {msg && (
          <div className="mt-2 text-sm text-center" style={{ color: msg === "Réservation réussie !" ? "green" : "red" }}>
            {msg}
          </div>
        )}
        </div>

       {/* Flèche déroulante */}
        <button
          onClick={() => setExpanded(e => !e)}
          className="ml-4 p-2 focus:outline-none"
          aria-label="Afficher plus d'informations"
        >
          {expanded ? <ChevronUp className="w-6 h-6 text-gray-600" /> : <ChevronDown className="w-6 h-6 text-gray-600" />}
        </button>
      </div>
      {/* Bloc déroulant: infos supplémentaires */}
      {expanded && (
        <div className="mt-4 bg-gray-50 rounded p-4 text-sm text-gray-700 transition-all">
          <div><b>Statut du vol</b>: {flight.status || "Non disponible"}</div>
          <div><b>Modèle avion</b>: {flight.aircraft}</div>
          <div><b>Terminal départ</b>: {flight.departureTerminal || "?"}</div>
          <div><b>Porte d embarquement</b>: {flight.departureGate || "?"}</div>
          <div><b>Retard au départ</b>: {flight.departureDelay ?? "?"} min</div>
          <div><b>Porte d arrivée</b>: {flight.arrivalGate || "?"}</div>
          <div><b>Baggage</b>: {flight.arrivalBaggage || "?"}</div>
          <div><b>Position actuelle</b>: {flight.latitude && flight.longitude ? `${flight.latitude}, ${flight.longitude}` : "Non disponible"}</div>
        </div>
      )}
    </div>
  );
};