'use client';
import { useSearch } from '#@/app/search-context';
import { Suspense, ReactNode } from 'react';
import { LinkCard } from './link';
import CardSkeleton from '../card/card-skeleton';
import { Card } from '../card/card';
import { Fecha } from '../card/fecha';
import { monDemandado } from '#@/lib/types/mongodb';

export default function SearchOutputList (
  {
    path,
    procesos,
    children
  }: {
    path: string;
    procesos: monDemandado[];
    children: ReactNode;
  }
) {
  const [ search ] = useSearch();
  const rows: any[] = [];
  procesos.forEach(
    (
      proceso, index, array
    ) => {
      if (
        proceso.sujetosProcesales.toLowerCase().indexOf(
          search.toLowerCase()
        ) ===
        -1
      ) {
        return;
      }
      rows.push(
        <Suspense fallback={ <CardSkeleton /> }>
          <Card
            name={ proceso.sujetosProcesales }
            idProceso={ proceso.idProceso }
            llaveProceso={ proceso.llaveProceso }
            path={ '/Procesos' }
            key={ proceso.idProceso }
          >
            { children }
          </Card>
        </Suspense>
      );
    }
  );

  return (
    <>
      <LinkCard path={ '/Procesos' } sujetosProcesales={ 'Demandados' } key={ 0 } />
      { rows }
    </>
  );
}
