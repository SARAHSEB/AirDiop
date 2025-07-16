// src/components/useAuth.ts
"use client";
import { useEffect, useState } from "react";

export function useAuth() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Vérifie via un appel API si le user est connecté (par exemple sur une route protégée)
    fetch("/api/user-status", { credentials: "include" })
      .then((res) => res.ok)
      .then(setConnected)
      .catch(() => setConnected(false));
  }, []);

  return { connected };
}
