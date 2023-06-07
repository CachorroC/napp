'use client';

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

import { SetStateAction } from 'react';

const NavContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavigator() {
  const context = useContext(NavContext);

  if (context === undefined) {
    throw new Error('useNavigator must be used within a NavProvider');
  }

  return context;
}
