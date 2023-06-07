import { ReactNode, Suspense } from 'react';
import layout from '#@/styles/css/layout.module.css';
import navbar from '#@/components/navbar/navbar.module.scss';
import Link from 'next/link';
import FBButtons from '#@/components/navbar/forwardBackButtons';
import InputSearchBar from '#@/components/search/InputSearchBar';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { getProcesos } from '#@/lib/getProcesos';
export default function Layout (
  { children }: { children: ReactNode }
) {

  return (
    <div className={ layout.header }>
      <Link className={ navbar.button } href='/'>
        Home
      </Link>
      <FBButtons />
      <InputSearchBar />
      { children }

    </div >
  );
}
