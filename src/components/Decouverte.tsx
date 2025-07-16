'use client';
import { Header } from '../components/Header'; // adapte le chemin selon ta structure

const destinations = [
  {
    name: "Bali",
    image: "/img/Bali.jpg",
    legend: "Plages de rêve à Bali",
  },
  {
    name: "New York",
    image: "/img/NewYork.jpeg",
    legend: "Les lumières de New York",
  },
  {
    name: "Le Cap",
    image: "/img/Capetown.jpg",
    legend: "Falaises et océan au Cap",
  },
  {
    name: "Tokyo",
    image: "/img/Tokyo.jpg",
    legend: "Futurisme et tradition à Tokyo",
  }
];

export default function Decouverte() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-sky-500 dark:text-yellow-300 mb-10 text-center drop-shadow">
          Découvrez des destinations de rêve
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="relative rounded-3xl overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-72 object-cover object-center brightness-90 group-hover:brightness-100"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-xl font-bold text-white drop-shadow">{dest.name}</h2>
                <p className="text-sm text-sky-100">{dest.legend}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
