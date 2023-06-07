import { Card } from '#@/components/card/card';
import CardSkeleton from '#@/components/card/card-skeleton';
import { Fecha } from '#@/components/card/fecha';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import LinkCardSkeleton from '#@/components/search/link-skeleton';
import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import Link from 'next/link';
import { Suspense } from 'react';
import { getProcesos } from '#@/lib/getProcesos';

export default async function Page () {
  const procesos = await getProcesos();
  return (
    <div className={ layout.body }>
      <div className={ layout.name }>
        <h1 className={ typeface.title }>
          Bienvenido a
          <strong>
            <strong> R&S </strong> consultoría jurídica
          </strong>
        </h1>
      </div>
      <div className={ layout.main }>
        <Suspense fallback={ <SearchOutputListSkeleton /> }>
          <SearchOutputList path={ '/Procesos' } procesos={ procesos }>
            { procesos.forEach(
              ( Pro, in, arr ) => {
              const idProceso = Pro.idProceso;
            }
          )}
          </SearchOutputList>
        </Suspense>
      </div>
    </div>
  );
}
