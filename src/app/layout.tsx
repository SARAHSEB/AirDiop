'use client';
import React, { useState, useEffect, createContext } from 'react';
import '../styles/globals.css';
import Footer  from '../components/Footer';

// 1. Context pour le dark mode
export const DarkModeContext = createContext<{
  dark: boolean;
  toggleDark: () => void;
}>({ dark: false, toggleDark: () => {} });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    setDark(localStorage.getItem('theme') === 'dark');
  }, []);

  const toggleDark = () => setDark((prev) => !prev);

  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Site de Réservation de Vol</title>
      </head>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <DarkModeContext.Provider value={{ dark, toggleDark }}>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </DarkModeContext.Provider>
      </body>
    </html>
  );
}
