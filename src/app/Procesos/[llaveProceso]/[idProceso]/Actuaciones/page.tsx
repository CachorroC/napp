import { Card } from '#@/components/card/card';
import { fixFechas } from '#@/lib/fix';
import { getActuaciones } from '#@/lib/getActuaciones';
import card from '#@/components/card/card.module.scss';
export default async function Page(
  {
    params: { llaveProceso, idProceso },
  }: {
  params: { llaveProceso: string; idProceso: number };
}
) {
  const proceso = await getActuaciones(
    idProceso
  );
  if (!proceso.acts) {
    return null;
  }
  return (
    <>
      {proceso.acts.map(
        (
          actuacion, index, array
        ) => (
          <Card
            key={actuacion.idRegActuacion}
            llaveProceso={actuacion.llaveProceso}
            name={actuacion.actuacion}
            icon='note_add'
            path={`/Procesos/${llaveProceso}/${idProceso}/NuevaNota`}
          >
            <p className={card.content}>{actuacion.anotacion}</p>
            <sub>{fixFechas(
              actuacion.fechaActuacion
            )}</sub>
          </Card>
        )
      )}
    </>
  );
}
