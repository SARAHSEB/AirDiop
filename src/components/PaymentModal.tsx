import React, { useState } from 'react';

interface PaymentModalProps {
  onClose: () => void;
  onSubmit: (bankInfo: { card: string; expiry: string; cvc: string }) => void;
  userEmail?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose, onSubmit, userEmail }) => {
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ card, expiry, cvc });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Informations de paiement</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Numéro de carte</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={card}
              onChange={(e) => setCard(e.target.value)}
              required
              maxLength={16}
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block text-gray-700">Expiration</label>
              <input
                className="w-full border px-3 py-2 rounded"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
                placeholder="MM/AA"
              />
            </div>
            <div>
              <label className="block text-gray-700">CVC</label>
              <input
                className="w-full border px-3 py-2 rounded"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                required
                maxLength={4}
                placeholder="123"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
            >
              Valider le paiement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
