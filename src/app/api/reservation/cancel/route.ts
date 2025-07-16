import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  await prisma.reservation.update({
    where: { id },
    data: { status: "cancelled" }
  });
  return NextResponse.json({ success: true });
}
