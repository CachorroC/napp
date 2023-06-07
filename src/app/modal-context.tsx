'use client';

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
  SetStateAction,
} from 'react';

const ModalContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <ModalContext.Provider value={[isShowing, setIsShowing]}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}
