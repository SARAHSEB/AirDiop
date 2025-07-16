import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors pb-10">
      {/* Titre stylisé */}
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-300 via-sky-500 to-blue-700 bg-clip-text text-transparent drop-shadow">
        À PROPOS DE NOTRE SITE ✈️
      </h1>

      {/* Grille moderne */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
        {[
          {
            img: "/img/Ap1.webp",
            title: "Nos pilotes experts",
            desc: "Nos pilotes hautement qualifiés assurent votre sécurité à chaque vol.",
          },
          {
            img: "/img/Ap2.webp",
            title: "Services bagages rapides",
            desc: "Profitez de nos services de bagages fluides et sécurisés à l’aéroport.",
          },
          {
            img: "/img/Ap3.webp",
            title: "Réservation facile en ligne",
            desc: "Réservez vos billets en quelques clics grâce à notre plateforme intuitive.",
          },
          {
            img: "/img/Ap4.webp",
            title: "Notre équipe dévouée",
            desc: "Une équipe de pilotes et hôtesses passionnés pour un service impeccable.",
          },
          {
            img: "/img/bon.webp",
            title: "Décollage et atterrissage sécurisés",
            desc: "Chaque étape de votre vol est soigneusement contrôlée pour votre tranquillité.",
          },
          {
            img: "/img/carte.webp",
            title: "Réseau mondial",
            desc: "Nous connectons des centaines de destinations à travers le monde entier.",
          },
        ].map((card, i) => (
          <div
            key={card.title}
            className="relative rounded-3xl overflow-hidden shadow-lg group hover:scale-[1.03] transition-transform duration-300 bg-white dark:bg-gray-800"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-60 object-cover object-center brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-900/80 to-transparent p-4">
              <h2 className="text-lg font-bold text-yellow-300 drop-shadow mb-1">{card.title}</h2>
              <p className="text-sm text-sky-100">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description moderne */}
      <div className="max-w-3xl mx-auto rounded-3xl shadow-xl bg-sky-500/90 dark:bg-yellow-400/80 text-white dark:text-blue-900 py-10 mt-14 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 drop-shadow">Pourquoi AirDiop Fly ?</h2>
        <p className="mb-6 mx-auto font-medium">
          AirDiop Fly est né de la passion de rendre le voyage aérien accessible à tous.<br />
          Notre objectif est de simplifier la réservation, vous offrir les meilleurs tarifs,
          et garantir un service fiable, rapide et sécurisé à chaque étape.
        </p>
        <a 
          href="/description" 
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-full transition shadow"
        >
          Voir plus
        </a>
      </div>
    </div>
  );
}
