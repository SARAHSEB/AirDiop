"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function PopUpNotConnected() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("/api/user-status", { credentials: "include" })
      .then((res) => res.ok ? res.json() : { connected: false })
      .then((data) => {
        if (!data.connected) setOpen(true);
        setChecked(true);
      })
      .catch(() => {
        setOpen(true);
        setChecked(true);
      });
  }, []);

  if (!open || !checked) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-sm w-full relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
          aria-label="Fermer"
        >
        </button>
        <div className="flex flex-col items-center text-center">
          <AlertCircle className="w-12 h-12 text-yellow-400 mb-3" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-yellow-300 mb-2">Non connecté</h2>
          <p className="text-gray-700 dark:text-gray-200 mb-5">
            Vous devez être connecté pour accéder à cette fonctionnalité.
          </p>
          <Link href="/connexion" className="inline-block px-6 py-2 bg-sky-500 hover:bg-sky-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-blue-900 rounded-lg font-semibold shadow transition">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
