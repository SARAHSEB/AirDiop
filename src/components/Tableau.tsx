'use client'; 
import { useEffect, useState } from 'react';
import { DashboardStats } from '../components/Dash/Tableaubord';
import { ReservationsList } from '../components/Dash/Dashbord';
import UserProfileBubble from '../components/UserProfil';
import PaymentModal from '../components/PaymentModal';
import { sendEmailConfirmation } from '../services/sendEmail';

export default function Tableau() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null); // AJOUT
  const [userStatusError, setUserStatusError] = useState<string | null>(null);

  // Pour la modale de paiement
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [currentReservation, setCurrentReservation] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/user-status', { credentials: "include" })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => {
        if (!data.user?.id) throw new Error("Non connecté");
        if (!data.user?.email) throw new Error("Adresse email manquante !");
        setUserEmail(data.user.email);

        // Concatène prénom et nom si existant
        const nomComplet = [data.user.name, data.user.lastname].filter(Boolean).join(' ');
        setUserName(nomComplet || 'Utilisateur');

        return fetch(`/api/reservation?userId=${data.user.id}`)
          .then(res => res.json());
      })
      .then(data => {
        setReservations(data.reservations || []);
        setLoading(false);
      })
      .catch((err) => {
        setReservations([]);
        setLoading(false);
        setUserStatusError(err?.message || "Erreur lors de la récupération du profil utilisateur.");
      });
  }, []);

  // Handler ouverture modale paiement
  const handlePay = (reservationId: number) => {
    setCurrentReservation(reservationId);
    setShowPaymentModal(true);
  };

  // Handler annulation
  const handleCancel = async (reservationId: number) => {
    await fetch('/api/reservation/cancel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: reservationId }),
    });
    window.location.reload();
  };

  // Handler validation formulaire de paiement
  const handlePaymentSubmit = async (bankInfo: { card: string; expiry: string; cvc: string }) => {
    if (!currentReservation) return;
    await fetch('/api/reservation/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: currentReservation }),
    });

    // Log pour vérification
    console.log("userEmail pour EmailJS:", userEmail);
    console.log("userName pour EmailJS:", userName);

    // Envoi de l’email de confirmation via EmailJS
    if (userEmail && userName) {
      console.log({ name: userName, email: userEmail, subject: "Confirmation de paiement" });
await sendEmailConfirmation(userName, userEmail)
  .then(() => alert('Email envoyé ! Vérifiez votre boîte mail.'))
  .catch((err) => {
    console.error('Erreur EmailJS:', err);
    alert('Erreur lors de l\'envoi de l\'email : ' + (err?.text || err?.message || err));
  });
    } else {
      alert("Erreur : nom ou email manquant pour l'envoi de l'email de confirmation.");
    }
    setShowPaymentModal(false);
    setCurrentReservation(null);
    window.location.reload();
  };

  if (loading) {
    return <div className="text-center py-10">Chargement...</div>;
  }
  if (userStatusError) {
    return <div className="text-center py-10 text-red-500">{userStatusError}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <UserProfileBubble />
      <DashboardStats reservations={reservations} />
      <div className="mt-8">
        <ReservationsList
          reservations={reservations}
          showAll
          onPay={handlePay}
          onCancel={handleCancel}
        />
      </div>
      {showPaymentModal && (
        <PaymentModal
          onClose={() => setShowPaymentModal(false)}
          onSubmit={handlePaymentSubmit}
          userEmail={userEmail || undefined}
        />
      )}
    </div>
  );
}
