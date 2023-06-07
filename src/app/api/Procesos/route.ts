import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '#@/lib/mongodb';
import { monDemandado } from '#@/lib/types/mongodb';

export async function GET() {
  const client = await clientPromise;
  if (!client) {
    throw new Error('no hay cliente mongólico');
  }
  const db = client.db('RyS');
  const procesos = (await db
    .collection('Procesos')
    .find({})
    .toArray()) as unknown as monDemandado[];
  if (!procesos.length) {
    throw new Error('no hay entradas en mongo');
  }

  return new NextResponse(JSON.stringify(procesos), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
