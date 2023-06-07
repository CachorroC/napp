import { Suspense } from 'react';
import { Route } from 'next';
import layout from '#@/styles/css/layout.module.css';
import { Fecha } from '#@/components/card/fecha';
import CardSkeleton from '#@/components/card/card-skeleton';
import Drawer from '#@/components/navbar/drawer';
import { Linker } from '#@/components/search/link';
import InputSearchBar from '#@/components/search/InputSearchBar';
import Link from 'next/link';
import { getProcesos } from '#@/lib/getProcesos';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import navbar from '#@/components/navbar/navbar.module.scss';

export default async function Default() {
  const procesos = await getProcesos();
  return (
    <div className={layout.header}>
      <Link className={navbar.button} href='/'>
        Home
      </Link>
      <Link className={navbar.button} href='/'>
        About
      </Link>
      <Link className={navbar.button} href='/'>
        Contact
      </Link>
      <InputSearchBar />
      <Drawer>
        <InputSearchBar />
        <Suspense fallback={<SearchOutputListSkeleton />}>
          <SearchOutputList path={'/Procesos'} procesos={procesos} />
        </Suspense>
      </Drawer>
    </div>
  );
}
