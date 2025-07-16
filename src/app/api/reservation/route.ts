import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      userId,         // id de l'utilisateur connecté
      flightId,       // identifiant du vol (depuis l'API)
      airline,
      departure,      // string, exemple "Paris (CDG) - 2024-07-07 15:00"
      arrival,        // string, exemple "New York (JFK) - 2024-07-07 20:00"
    } = data;

    // Vérification de base
    if (!userId || !flightId || !airline || !departure || !arrival) {
      return NextResponse.json({ error: 'Paramètres manquants.' }, { status: 400 });
    }

    // Création de la réservation
    const reservation = await prisma.reservation.create({
      data: {
        userId,
        flightId,
        airline,
        departure,
        arrival,
        // bookingDate et status prennent leur valeur par défaut
      },
    });

    return NextResponse.json({ success: true, reservation }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur lors de la réservation.' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'userId requis' }, { status: 400 });
    }

    const reservations = await prisma.reservation.findMany({
      where: { userId: Number(userId) },
    });

    return NextResponse.json({ reservations });
  } catch (error) {
    console.error('Erreur GET reservation:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

//A revoir
