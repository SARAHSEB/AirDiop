"use client";

import React, { useContext, useState } from 'react';
import { Plane, Menu, User, Moon, Sun } from 'lucide-react';
import Link from "next/link";
import { useAuth } from "./useAuth";
import { DarkModeContext } from '../app/layout'; // <-- adapte le chemin selon ton projet

export const Header: React.FC = () => {
  const { connected } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Utilisation du contexte dark mode global
  const { dark, toggleDark } = useContext(DarkModeContext);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/connexion";
  };

  const handleToggleMenu = () => setMobileOpen(open => !open);

  return (
    <header className="bg-white dark:bg-gray-950 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & nom */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-sky-500 rounded-lg">
              <img
                src="/img/logojet.png"
                alt="Logo AirDiop"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-yellow-100">AirDiop</h1>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 font-medium transition-colors">
              Vols
            </Link>
            <Link href="/tableau" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 font-medium transition-colors">
              Tableau de bord
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 font-medium transition-colors">
              A propos
            </Link>
            <Link href="/decouverte" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 font-medium transition-colors">
              Decouverte
            </Link>
          </nav>

          {/* Boutons à droite */}
          <div className="flex items-center space-x-2">
            {!connected && (
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors">
                <User className="w-5 h-5" />
                <Link href="/connexion"><span>Connexion</span></Link>
              </button>
            )}
            {connected && (
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Déconnexion</span>
              </button>
            )}

            {/* BOUTON DARK MODE */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-700"
              title="Changer le mode d'affichage"
            >
              {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>

            {/* Bouton hamburger */}
            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg"
              onClick={handleToggleMenu}
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {mobileOpen && (
        <nav className="md:hidden flex flex-col bg-white dark:bg-gray-950 px-4 py-2 rounded shadow space-y-2 mt-2">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 font-medium transition-colors" onClick={() => setMobileOpen(false)}>
            Vols
          </Link>
          <Link href="/tableau" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 font-medium transition-colors" onClick={() => setMobileOpen(false)}>
            Tableau de bord
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 font-medium transition-colors" onClick={() => setMobileOpen(false)}>
            À propos
          </Link>
          <Link href="/decouverte" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 font-medium transition-colors" onClick={() => setMobileOpen(false)}>
            Decouverte
          </Link>
          {!connected && (
            <Link href="/connexion" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
              <User className="w-5 h-5" />
              <span>Connexion</span>
            </Link>
          )}
          {connected && (
            <button
              onClick={() => {
                setMobileOpen(false);
                handleLogout();
              }}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Déconnexion</span>
            </button>
          )}
          {/* Dark mode en mobile */}
          <button
            onClick={toggleDark}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
            title="Changer le mode d'affichage"
          >
            {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            <span>Mode {dark ? "Clair" : "Sombre"}</span>
          </button>
        </nav>
      )}
    </header>
  );
};
