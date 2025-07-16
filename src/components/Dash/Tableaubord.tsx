import React from 'react';
import { Plane, Calendar, MapPin } from 'lucide-react';

interface Reservation {
  id: number;
  userId: number;
  flightId: string;
  airline: string;
  departure: string;
  arrival: string;
  bookingDate: string;
  status: string;
}

interface DashboardStatsProps {
  reservations: Reservation[];
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({ reservations }) => {
  // Statistiques de base
  const totalReservations = reservations.length;
  const activeReservations = reservations.filter(r => r.status === 'active').length;
  const cancelledReservations = reservations.filter(r => r.status === 'cancelled').length;

  // Extraire les destinations uniques depuis "arrival"
  const uniqueDestinations = new Set(
    reservations.map(r => r.arrival)
  ).size;

  const stats = [
    {
      title: 'Réservations totales',
      value: totalReservations,
      icon: Plane,
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600'
    },
    {
      title: 'Réservations actives',
      value: activeReservations,
      icon: Calendar,
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Réservations annulées',
      value: cancelledReservations,
      icon: Calendar,
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      title: 'Destinations',
      value: uniqueDestinations,
      icon: MapPin,
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    }
  ];

  return (
    <div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white dark:drop-shadow-lg mb-6">
  Tableau de bord
</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Tu peux garder la partie "graphique" pour de la déco */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Activité des réservations
        </h3>
        {/* Graphique simulé */}
        <div className="grid grid-cols-12 gap-2 h-32 items-end">
          {Array.from({ length: 12 }, (_, i) => {
            const height = Math.random() * 100 + 20;
            const isCurrentMonth = i === new Date().getMonth();
            return (
              <div
                key={i}
                className={`rounded-t-sm transition-all duration-300 hover:opacity-80 ${
                  isCurrentMonth ? 'bg-sky-500' : 'bg-gray-300'
                }`}
                style={{ height: `${height}%` }}
                title={`${['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'][i]}`}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, i) => (
            <div key={i} className="text-xs text-gray-500 text-center">
              {month}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
