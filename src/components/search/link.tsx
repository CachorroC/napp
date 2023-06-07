'use client';
import Link from 'next/link';
import {
  useSelectedLayoutSegment,
  usePathname,
  useSelectedLayoutSegments,
  useParams,
} from 'next/navigation';
import type { Route } from 'next';
import { useNavigator } from '#@/app/navigator-context';
import searchbar from '#@/components/search/searchbar.module.scss';
import { ReactNode } from 'react';
import { useModal } from '#@/app/modal-context';
import card from '#@/components/card/card.module.scss';

export const LinkCard = (
  {
    path,
    sujetosProcesales,
    llaveProceso,
    idProceso,
  }: {
    path: string;
    sujetosProcesales: string;
    llaveProceso: string;
    idProceso?: number;
  }
) => {
  const params = useParams();
  const pathname = usePathname();
  const [ isOpen, setIsOpen ] = useNavigator();

  const href = (
    llaveProceso
      ? idProceso
        ? `${ path }/${ llaveProceso }/${ idProceso }/Actuaciones`
        : `${ path }/${ llaveProceso }`
      : path
  ) as Route;
  const isActive =
    pathname === href ||
    pathname === `${ path }/${ llaveProceso }/${ idProceso }/Actuaciones` ||
    pathname === `${ path }/${ llaveProceso }/${ idProceso }` ||
    pathname === `${ path }/${ llaveProceso }` ||
    pathname === path;
  const mismoDemandado =
    params.llaveProceso === llaveProceso &&
    params.idProceso !== idProceso?.toString();
  return (
    <Link
      key={ idProceso }
      href={ href }
      className={ searchbar.linkContainer }
    >
      <button
        onClick={ () => {
          setIsOpen(
            false
          );
        } }
        style={
          mismoDemandado
            ? {
              backgroundColor: 'var(--secondary)',
              color: 'var(--on-secondary)',
            }
            : {}
        }
        className={ isActive
          ? searchbar.linkIsActive
          : searchbar.link }
      >
        <h1 className={ searchbar.text }>{ sujetosProcesales }</h1>
      </button>
    </Link>
  );
};

export function Linker<T extends string> (
  {
    children,
    path,
    llaveProceso,
    idProceso,
  }: {
    children: ReactNode;
    path: string;
    llaveProceso?: string;
    idProceso?: number;
  }
) {
  const pathname = usePathname();

  const href = (
    llaveProceso
      ? idProceso
        ? `${ path }/${ llaveProceso }/${ idProceso }/Actuaciones`
        : `${ path }/${ llaveProceso }`
      : path
  ) as Route;
  const isActive =
    pathname === href ||
    pathname === `${ path }/${ llaveProceso }/${ idProceso }/Actuaciones` ||
    pathname === `${ path }/${ llaveProceso }/${ idProceso }` ||
    pathname === `${ path }/${ llaveProceso }` ||
    pathname === path;
  const [ isShowing, setIsShowing ] = useModal();
  return (
    <Link
      href={ href }
      className={ isActive
        ? card.linkIsActive
        : card.link }
      onClick={ () => {
        setIsShowing(
          true
        );
      } }
    >
      { children }
    </Link>
  );
}
