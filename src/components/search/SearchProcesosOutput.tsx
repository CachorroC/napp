'use client';
import { useSearch } from '#@/app/search-context';
import { Suspense, ReactNode, ReactElement } from 'react';
import { monDemandado } from '#@/lib/types/mongodb';
import CardSkeleton from '#@/components/card/card-skeleton';
import { Card } from '#@/components/card/card';
import { LinkCard } from './link';

export default function SearchOutputList (
  {
    path,
    procesos,
  }: {
    path: string;
    procesos: monDemandado[];
  }
) {
  const [ search ] = useSearch();
  const rows: any[] = [];
  procesos.forEach(
    async (
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
          <LinkCard
            path={ path }
            sujetosProcesales={ proceso.sujetosProcesales }
            idProceso={ proceso.idProceso }
            llaveProceso={ proceso.llaveProceso }
          />
        </Suspense>
      );
    }
  );

  return (
    <>
      <LinkCard
        path={ path }
        sujetosProcesales={ 'Demandados' }
        key={ 0 }
        llaveProceso={ '0' }
      />
      { rows }
    </>
  );
}
