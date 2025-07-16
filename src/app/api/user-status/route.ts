import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret!';
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get('auth')?.value;
  if (!cookie) {
    return NextResponse.json({ connected: false }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(cookie, JWT_SECRET) as { id: number, email: string };
    // Récupère aussi le nom et prénom !
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        name: true,
        lastname: true
      }
    });
    if (!user) {
      return NextResponse.json({ connected: false }, { status: 401 });
    }
    return NextResponse.json({ connected: true, user });
  } catch {
    return NextResponse.json({ connected: false }, { status: 401 });
  }
}


