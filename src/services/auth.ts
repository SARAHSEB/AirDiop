// src/services/auth.ts
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret!';

export function getUserFromRequest(req: any) {
  const cookie = req.headers.get('cookie');
  if (!cookie) return null;
  const match = cookie.match(/auth=([^;]+)/);
  if (!match) return null;

  try {
    const decoded = jwt.verify(match[1], JWT_SECRET) as { id: number; email: string };
    return decoded;
  } catch (err) {
    return null;
  }
}
