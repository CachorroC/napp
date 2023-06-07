import Drawer from '#@/components/navbar/drawer';
import InputSearchBar from '#@/components/search/InputSearchBar';
import { Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { getProcesos } from '#@/lib/getProcesos';
export default async function Page () {
  const procesos = await getProcesos();
  return (
    <Drawer>
      <InputSearchBar />
      <Suspense fallback={ <SearchOutputListSkeleton /> }>
        <SearchOutputList path={ '/Procesos' } procesos={ procesos } />
      </Suspense>
    </Drawer>
  );
}