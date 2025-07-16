import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'; // ⚠️ utilise bien 'bcryptjs' et pas juste 'bcrypt'
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret!';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return new Response(JSON.stringify({ error: "Utilisateur non trouvé" }), { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response(JSON.stringify({ error: "Mot de passe incorrect" }), { status: 401 });
  }

  // Générer le JWT
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

  // Créer la réponse et ajouter le cookie
  const res = new Response(JSON.stringify({
    success: true,
    message: 'Connexion réussie',
    user: { id: user.id, email: user.email }
  }), { status: 200 });

  // Ajouter le cookie JWT (HTTP-only, 7j, sécurisé en prod)
  res.headers.append(
    'Set-Cookie',
    `auth=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict;${process.env.NODE_ENV === 'production' ? ' Secure;' : ''}`
  );

  return res;
}

