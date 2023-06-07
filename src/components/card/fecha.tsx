'use server';
import 'server-only';
import { cache } from 'react';
import card from '#@/components/card/card.module.scss';
import { getActuaciones } from '#@/lib/getActuaciones';
import { fixFechas } from '#@/lib/fix';

export async function Fecha (
  {
    idProceso,
    helper,
  }: {
    idProceso: number;
    helper?: string | null | undefined;
  }
) {
  const reqAactuaciones = await getActuaciones(
    idProceso
  );
  if ( !reqAactuaciones.acts ) {
    return (
      <div className={ card.date }>
        <p>Seguimos procesando su solicitud</p>
      </div>
    );
  }
  const actuaciones = reqAactuaciones.acts;
  const ultimaAct = actuaciones[ 0 ];
  return (
    <sub key={ idProceso } className={ card.date }>
      { helper ?? fixFechas(
        ultimaAct.fechaActuacion
      ) }
    </sub>
  );
}
