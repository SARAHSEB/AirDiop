"use client";
import { useState } from "react";
import { Mail, Facebook, Instagram, Twitter, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Ici tu peux appeler une API ou EmailJS !
    setTimeout(() => setStatus("sent"), 1500); // simulation
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 flex flex-col items-center transition-colors">
      <div className="max-w-2xl w-full mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-center text-sky-500 dark:text-yellow-400 mb-2 drop-shadow">
          Contactez-nous
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Une question, une suggestion? Écrivez-nous ou contactez-nous sur les réseaux.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-200 font-medium">Nom</label>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-sky-300 dark:border-yellow-400 bg-sky-50 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-200 font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-sky-300 dark:border-yellow-400 bg-sky-50 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-200 font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-sky-300 dark:border-yellow-400 bg-sky-50 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-yellow-400 resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full flex justify-center items-center bg-sky-500 hover:bg-sky-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-blue-900 font-bold py-3 px-4 rounded-lg transition duration-200 shadow"
          >
            <Send className="w-5 h-5 mr-2" />
            {status === "idle" && "Envoyer"}
            {status === "sending" && "Envoi..."}
            {status === "sent" && "Message envoyé !"}
          </button>
        </form>

        {/* Réseaux sociaux */}
        <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <div className="mb-2 text-gray-700 dark:text-gray-300 font-medium">Nos réseaux sociaux</div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:contact@airdiop.com" target="_blank" rel="noopener" className="text-sky-500 dark:text-yellow-400 hover:text-sky-700">
              <Mail className="w-7 h-7" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener" className="text-sky-500 dark:text-yellow-400 hover:text-sky-700">
              <Facebook className="w-7 h-7" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="text-pink-500 dark:text-yellow-400 hover:text-pink-700">
              <Instagram className="w-7 h-7" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" className="text-sky-400 dark:text-yellow-400 hover:text-sky-600">
              <Twitter className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
