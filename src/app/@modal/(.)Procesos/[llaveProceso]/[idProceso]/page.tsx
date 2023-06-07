import { Card } from '#@/components/card/card';
import { Fecha } from '#@/components/card/fecha';
import { Suspense } from 'react';
import Modal from '#@/components/modal/modal';
import { getProcesoByidProceso } from '#@/lib/getProcesos';

export default async function Page(
  {
    params: { llaveProceso, idProceso },
  }: {
  params: { llaveProceso: string; idProceso: number };
}
) {
  const proceso = await getProcesoByidProceso(
    { idProceso: idProceso }
  );
  return (
    <Modal>
      <Card
        name={proceso.sujetosProcesales}
        path={'/Procesos'}
        llaveProceso={llaveProceso}
        idProceso={idProceso}
        icon='open_in_browser'
      >
        <Suspense>
          <Fecha idProceso={idProceso} />
        </Suspense>
      </Card>
    </Modal>
  );
}
