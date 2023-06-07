import 'server-only';
import { cache } from 'react';
import { getBaseUrl } from './getBaseUrl';
import { monDemandado } from './types/mongodb';

const rows: unknown[] = [];

export const getProcesos = cache(
  async () => {
    const req = await fetch(
      `${getBaseUrl()}/api/Procesos`
    );
    if (!req.ok) {
      throw new Error(
        'no pudimos comunicarnos con /api/procesos, este error proviene de getProcesos'
      );
    }
    const res = (await req.json()) as monDemandado[];
    return res;
  }
);
export const getProcesosByllaveProceso = cache(
  async (
    { llaveProceso }: { llaveProceso: string }
  ) => {
    const req = await fetch(
      `${getBaseUrl()}/api/Procesos/${llaveProceso}`
    );

    const res = (await req.json()) as monDemandado[];

    return res;
  }
);

export const getProcesoByidProceso = cache(
  async (
    { idProceso }: { idProceso: number }
  ) => {
    const res = await fetch(
      `${getBaseUrl()}/api/Procesos?idProceso=${idProceso}`
    );
    if (!res.ok) {
      throw new Error(
        'no pudo obtener el proceso by idProceso en /api/procesos desde getProcesos'
      );
    }
    const proceso = (await res.json()) as monDemandado;
    return proceso;
  }
);
