import React from 'react';
import { Plane, MapPin, Clock, AlertCircle } from 'lucide-react';

interface Reservation {
  id: number;
  userId: number;
  flightId: string;
  airline: string;
  departure: string; // "Paris (CDG) - 2024-07-07 15:00"
  arrival: string;   // "New York (JFK) - 2024-07-07 20:00"
  bookingDate: string;
  status: string; // "active" ou "cancelled"
  paid?: boolean; // <-- AJOUT POUR LA BULLE
}

interface ReservationsListProps {
  reservations: Reservation[];
  showAll?: boolean;
  onViewAll?: () => void;
  onPay?: (id: number) => void;      // Ajoute ceci
  onCancel?: (id: number) => void;   // Ajoute ceci
}

export const ReservationsList: React.FC<ReservationsListProps> = ({
  reservations,
  showAll = false,
  onViewAll,
  onPay,
  onCancel
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'cancelled':
        return 'Annulée';
      default:
        return status;
    }
  };

  // Bulle de nombre de réservations payées
  const paidCount = reservations.filter(r => r.paid).length;

  return (
    <>
      {/* Bulle réservations payées */}
      {paidCount > 0 && (
        <div className="flex items-center p-4 bg-green-100 rounded-lg shadow mb-6 max-w-xs ml-auto">
          <span className="w-10 h-10 flex items-center justify-center bg-green-400 rounded-full text-white font-bold mr-3 text-lg">
            {paidCount}
          </span>
          <span className="text-green-800 font-medium">Réservations payées</span>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {showAll ? 'Toutes mes réservations' : 'Réservations récentes'}
          </h3>
          {!showAll && onViewAll && (
            <button
              onClick={onViewAll}
              className="text-sky-500 hover:text-sky-600 font-medium transition-colors"
            >
              Voir tout
            </button>
          )}
        </div>

        {reservations.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plane className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Aucune réservation</h4>
            <p className="text-gray-600 mb-6">
              Vous n'avez pas encore de réservations. Commencez par rechercher un vol!
            </p>
            <a
              href="/"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
            >
              <Plane className="w-5 h-5" />
              <span>Rechercher un vol</span>
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            {reservations.map((reservation) => (
              <div
                key={reservation.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                      <Plane className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {reservation.airline}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Vol ID: {reservation.flightId}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(reservation.status)}`}>
                      {getStatusText(reservation.status)}
                    </span>
                    {reservation.status === "active" && (
                      <div className="flex items-center space-x-1 text-orange-600">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">À venir</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700 font-medium">
                      Départ : {reservation.departure}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700 font-medium">
                      Arrivée : {reservation.arrival}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  Réservé le : {new Date(reservation.bookingDate).toLocaleString('fr-FR')}
                </div>

                {/* Boutons Paiement et Annulation */}
                <div className="flex space-x-2 mt-2">
                  {!reservation.paid && reservation.status !== 'cancelled' && onPay && (
                    <button
                      onClick={() => onPay(reservation.id)}
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition-colors"
                    >
                      Payer
                    </button>
                  )}
                  {reservation.status !== 'cancelled' && onCancel && (
                    <button
                      onClick={() => onCancel(reservation.id)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition-colors"
                    >
                      Annuler
                    </button>
                  )}
                  {reservation.paid && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium ml-2">
                      Payée
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

