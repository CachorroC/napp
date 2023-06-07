'use client';
import { useNavigator } from '#@/app/navigator-context';
import { ReactNode, Suspense } from 'react';
import navbar from '#@/components/navbar/navbar.module.scss';
import layout from '#@/styles/css/layout.module.css';
import InputSearchBar from '#@/components/search/InputSearchBar';
export default function Drawer(
  { children }: { children: ReactNode }
) {
  const [ isOpen, setIsOpen ] = useNavigator();
  if (isOpen) {
    return (
      <div className={` ${navbar.drawer} ${layout.open}`}>
        <div className={navbar.sidenav}>{children}</div>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        setIsOpen(
          true
        );
      }}
    >
      <span className='material-symbols-outlined'>menu</span>
    </button>
  );
}
