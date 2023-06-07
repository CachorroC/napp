import { Card } from '#@/components/card/card';
import Modal from '#@/components/modal/modal';
import Title from '#@/components/modal/title';
import { fixFechas } from '#@/lib/fix';
import { getActuaciones } from '#@/lib/getActuaciones';
import card from '#@/components/card/card.module.scss';
import layout from '#@/styles/css/layout.module.css';

export default async function Page (
  {
    params: { llaveProceso, idProceso },
  }: {
    params: { llaveProceso: string; idProceso: number };
  }
) {
  const proceso = await getActuaciones(
    idProceso
  );
  if ( !proceso.acts ) {
    return null;
  }
  return (
    <Modal>


      <Title key={ 0 } />
      { proceso.acts.map(
        (
          actuacion, index, array
        ) => (
          <Card
            key={ actuacion.idRegActuacion }
            llaveProceso={ actuacion.llaveProceso }
            name={ actuacion.actuacion }
            icon='note_add'
            path={ '/NuevaNota' }
          >
            <p className={ card.content }>{ actuacion.anotacion }</p>
            <sub>{ fixFechas(
              actuacion.fechaActuacion
            ) }</sub>
          </Card>
        )
      ) }

    </Modal>
  );
}
