'use client';
import React from "react";
import Tableau from '../../components/Tableau';
import { Header } from '../../components/Header';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Tableau />
      </main>
    </div>
  );
}
