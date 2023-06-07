'use client';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import card from '#@/components/card/card.module.scss';
import layout from '#@/styles/css/layout.module.css';
export const Card = ({
  name,
  path,
  children,
  llaveProceso,
  idProceso,
  icon,
}: {
  name: string;
  path: string;
  children: ReactNode;
  llaveProceso?: string;
  idProceso?: number;
  icon?: string;
}) => {
  const pathname = usePathname();

  const href = (
    llaveProceso
      ? idProceso
        ? `${path}/${llaveProceso}/${idProceso}/Actuaciones`
        : `${path}/${llaveProceso}`
      : `${path}`
  ) as Route;
  const isActive =
    pathname === href ||
    pathname === `${path}/${llaveProceso}/${idProceso}/Actuaciones` ||
    pathname === `${path}/${llaveProceso}/${idProceso}` ||
    pathname === `${path}/${llaveProceso}` ||
    pathname === path;
  return (
    <div className={card.container}>
      <div className={card.layout}>
        <div className={card.top}>
          <h2 className={card.title}>{name}</h2>
        </div>

        {children}
        <div className={card.bottom}>
          <Link
            href={href}
            className={isActive ? card.linkIsActive : card.link}
          >
            <span className={`material-symbols-outlined ${card.icon}`}>
              {icon ?? 'star'}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
