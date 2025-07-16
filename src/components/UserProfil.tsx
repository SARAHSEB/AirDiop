'use client';
import React, { useEffect, useState } from 'react';

type User = {
  name?: string;
  lastname?: string;
  email: string;
};

export default function UserProfileBubble() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
  fetch('/api/user-status', { credentials: 'include' })
    .then((res) => res.ok ? res.json() : null)
    .then((data) => setUser(data?.user || null));
}, []);

  if (!user) return null;

  // Génération de l'URL de l'avatar automatique
  const avatar = `https://ui-avatars.com/api/?name=${
    encodeURIComponent(
      ((user.name || '') + ' ' + (user.lastname || '')).trim() || user.email
    )
  }&background=0D8ABC&color=fff&size=128`;

  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow mb-6 max-w-xs ml-auto">
      <img
        src={avatar}
        alt="Avatar"
        className="w-14 h-14 rounded-full object-cover border-2 border-sky-500 mr-3"
      />
      <div>
        <div className="font-semibold text-gray-900">
          {(user.name || '') + ' ' + (user.lastname || '')}
        </div>
        <div className="text-sm text-gray-500">{user.email}</div>
      </div>
    </div>
  );
}
