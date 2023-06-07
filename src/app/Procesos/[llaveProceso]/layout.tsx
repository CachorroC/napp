import { getProcesosByllaveProceso } from '#@/lib/getProcesos';
import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import { Card } from '#@/components/card/card';
import { ReactNode } from 'react';

export default async function Layout(
  {
    params,
    children,
  }: {
  params: { llaveProceso: string };
  children: ReactNode;
}
) {
  const procesos = await getProcesosByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  return (
    <div className={layout.body}>
      <div className={layout.name}>
        {procesos.map(
          (
            proceso, index, array
          ) => (
            <Card
              name={proceso.sujetosProcesales}
              key={proceso.idProceso}
              path={'/Procesos'}
              llaveProceso={params.llaveProceso}
              idProceso={proceso.idProceso}
            >
              <h1 className={typeface.title}>{proceso.sujetosProcesales}</h1>
            </Card>
          )
        )}
      </div>
      {children}
    </div>
  );
}
