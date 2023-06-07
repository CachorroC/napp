'use client';
import { usePathname } from 'next/navigation';
import searchbar from '#@/components/search/searchbar.module.scss';
import { useSearch } from '#@/app/search-context';
import { useNavigator } from '#@/app/navigator-context';

export default function InputSearchBar () {
  const [ search, setSearch ] = useSearch();
  const [ isOpen, setIsOpen ] = useNavigator();
  const pathname = usePathname();

  return (
    <input
      type='text'
      className={ searchbar.input }
      value={ search }
      placeholder={ pathname }
      onBeforeInput={ () => {
        pathname === '/' && setIsOpen(
          true
        );
      } }
      onChange={ (
        input
      ) => {
        setSearch(
          input.target.value
        );
      } }
    />
  );
}
