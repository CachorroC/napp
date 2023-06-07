'use client';

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

import { SetStateAction } from 'react';

const NoteContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(
  undefined
);

export function NoteProvider(
  { children }: { children: ReactNode }
) {
  const [ isShowing, setIsShowing ] = useState(
    true
  );

  return (
    <NoteContext.Provider value={[ isShowing, setIsShowing ]}>
      {children}
    </NoteContext.Provider>
  );
}

export function useNoter() {
  const context = useContext(
    NoteContext
  );

  if (context === undefined) {
    throw new Error(
      'useNoter must be used within a NoteProvider'
    );
  }

  return context;
}
