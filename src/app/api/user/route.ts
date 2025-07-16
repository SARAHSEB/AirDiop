import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        lastname: true,
        password: true,
        createdAt: true
        // Tu peux enlever/ajouter les champs que tu veux ici
      }
    });
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la récupération des utilisateurs" }, { status: 500 });
  }
}
