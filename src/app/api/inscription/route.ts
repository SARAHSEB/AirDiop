import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password, name, lastname } = await req.json();

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'Email déjà utilisé.' }), { status: 400 });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const user = await prisma.User.create({
      data: {
        email,
        name,
        lastname,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify({ message: 'Utilisateur créé avec succès', user }), { status: 201 });
  } catch (error) {
    console.error('Erreur inscription:', error);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), { status: 500 });
  } finally {
    // Facultatif : à ajouter si tu as des problèmes de connexion
    // await prisma.$disconnect();
  }
}

