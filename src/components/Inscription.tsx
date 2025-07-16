"use client";
import { useState } from 'react';
import Link from "next/link";
import { Plane, UserPlus } from 'lucide-react';

export default function Inscription() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("loading");

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setStatus("idle");
      return;
    }

    const res = await fetch('/api/inscription', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok && data.success) {
      setStatus("ok");
      // Redirection automatique après succès
      window.location.href = "/tableau";
    } else {
      setError(data.error || "Erreur lors de l'inscription.");
      setStatus("idle");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-yellow-50 to-sky-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors">
      <form
        className="relative bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-2xl w-full max-w-md flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-sky-500 dark:bg-yellow-400 p-3 rounded-full shadow-lg">
          <UserPlus className="w-8 h-8 text-white dark:text-sky-600" />
        </div>
        <h2 className="text-3xl font-bold mb-7 text-sky-500 dark:text-yellow-400 mt-4 text-center drop-shadow">
          Créer un compte AirDiop
        </h2>
        <div className="w-full space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sky-300 dark:border-yellow-400 bg-sky-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-yellow-400 transition"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Prénom"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sky-300 dark:border-yellow-400 bg-sky-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-yellow-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sky-300 dark:border-yellow-400 bg-sky-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-yellow-400 transition"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sky-300 dark:border-yellow-400 bg-sky-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-yellow-400 transition"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sky-300 dark:border-yellow-400 bg-sky-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-yellow-400 transition"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-sky-500 hover:bg-sky-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-blue-900 font-bold py-3 px-4 rounded-lg transition duration-200 shadow"
          disabled={status === "loading" || status === "ok"}
        >
          {status === "loading" ? "Inscription..." : "Créer le compte"}
        </button>
        {error && (
          <div className="text-red-600 dark:text-red-400 text-center mt-4">{error}</div>
        )}
        <Link href="/connexion" className="block text-sm text-sky-500 dark:text-yellow-400 hover:underline mt-4">
          Déjà inscrit ? Se connecter
        </Link>
      </form>
    </div>
  );
}
