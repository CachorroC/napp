import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { intConsultaActuaciones } from '#@/lib/types/procesos';

export async function GET(
  request: NextRequest,
  { params: { idProceso } }: { params: { idProceso: number } }
) {
  const req = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`,
    {
      mode: 'cors',
    }
  );
  if (!req.ok) {
    return new NextResponse(JSON.stringify(req), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
  const res = (await req.json()) as intConsultaActuaciones;
  console.log(JSON.stringify(res));
  if (res.actuaciones.length === 0) {
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
  return new Response(JSON.stringify(res.actuaciones), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
