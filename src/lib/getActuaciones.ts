import 'server-only';
import {
  IntActuaciones,
  intActuacion,
  intConsultaActuaciones,
} from './types/procesos';
import { NextResponse } from 'next/server';
import { cache } from 'react';
export const preload = (
  idProceso: number
) => {
  void getActuaciones(
    idProceso
  );
};

export const getActuaciones = cache(
  async (
    idProceso: number
  ) => {
    try {
      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`,
        {
          mode: 'cors',
          next: {
            revalidate: 259200,
          },
        }
      );
      if (!request.ok) {
        const text = await request.text();
        const response: IntActuaciones = {
          idProceso: idProceso,
          text: text
            ? JSON.parse(
              text
            )
            : '',
        };
        return response;
      }

      const res = (await request.json()) as intConsultaActuaciones;
      if (res.actuaciones) {
        const response: IntActuaciones = {
          idProceso: idProceso,

          text: {
            statusCode: request.status,
            message: request.statusText,
          },
          acts: res.actuaciones,
        };
        return response;
      }
      const text = await request.text();
      const response: IntActuaciones = {
        idProceso: idProceso,
        text: JSON.parse(
          text
        ),
      };
      return response;
    }
    catch {
      (
        error: unknown | any
      ) => {
        const response: IntActuaciones = {
          idProceso: idProceso,
          text: {
            message: error.message ?? 'error',
            statusCode: 0,
          },
        };
        return response;
      };
    }
    const response: IntActuaciones = {
      idProceso: idProceso,
      text: {
        message: 'error final',
        statusCode: 0,
      },
    };
    return response;
  }
);
