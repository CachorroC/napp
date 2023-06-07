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
import FBButtons from '#@/components/navbar/forwardBackButtons';

export default async function Default () {
  return (
    <div className={ layout.header }>
      <Link className={ navbar.button } href='/'>
        Home
      </Link>
      <FBButtons />
      <InputSearchBar />
    </div >
  );
}
