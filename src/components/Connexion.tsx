"use client";
import { useState } from "react";
import Link from "next/link";
import { Plane } from "lucide-react";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/connexion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = "/tableau";
    } else {
      setError(data.error || "Erreur de connexion");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-yellow-50 to-sky-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors">
      <form
        id="form-connexion"
        className="relative bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl w-full max-w-md flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-sky-500 dark:bg-yellow-400 p-3 rounded-full shadow-lg">
          <Plane className="w-8 h-8 text-white dark:text-sky-600" />
        </div>
        <h2 className="text-3xl font-bold mb-7 text-sky-500 dark:text-yellow-400 mt-4 text-center drop-shadow">
          Connexion à AirDiop
        </h2>
        <div className="w-full mb-5">
          <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-200 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-sky-300 dark:border-yellow-300 bg-sky-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-yellow-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="w-full mb-7">
          <label htmlFor="password" className="block mb-2 text-gray-700 dark:text-gray-200 font-medium">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border border-sky-300 dark:border-yellow-300 bg-sky-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-yellow-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link href="/inscription" className="block text-right text-sm text-sky-500 dark:text-yellow-400 hover:underline mt-2">
            Crée un compte
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-blue-900 font-bold py-3 px-4 rounded-lg transition duration-200 shadow"
        >
          Se connecter
        </button>
        {error && (
          <div className="text-red-600 dark:text-red-400 text-center mt-5">{error}</div>
        )}
      </form>
    </div>
  );
}
