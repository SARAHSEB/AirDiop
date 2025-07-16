import emailjs from 'emailjs-com';


export function sendEmailConfirmation(name: string, email: string): Promise<any> {
  return emailjs.send(
    'service_gzqnlc6',      // Ton service ID
    'template_lgaaqh4',     // Ton template ID
    {
      name,                // prénom/nom du client
      subject: "Confirmation de paiement", // ou autre texte
      email                // destination du mail
    },
    'xgOGP15uUurppk0ph' // TA CLÉ PUBLIQUE
  );
}

