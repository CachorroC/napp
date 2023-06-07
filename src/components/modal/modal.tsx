'use client';
import { useCallback, useRef, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useModal } from '#@/app/modal-context';
import modal from '#@/components/modal/modal.module.scss';

export default function Modal (
  { children }: { children: ReactNode }
) {
  const [ isShowing, setIsShowing ] = useModal();
  const router = useRouter();

  const onDismiss = useCallback(
    () => {
      router.back();
    },
    [ router ]
  );

  const onKeyDown = useCallback(
    (
      event: { key: string }
    ) => {
      if ( event.key === 'Escape' ) {
        onDismiss();
      }
    },
    [ onDismiss ]
  );

  useEffect(
    () => {
      document.addEventListener(
        'keydown',
        onKeyDown
      );
      return () => {
        document.removeEventListener(
          'keydown',
          onKeyDown
        );
      };
    },
    [ onKeyDown ]
  );
  if ( !isShowing ) {
    return (
      <div className={ modal.modal }>
        <button
          onClick={ () => {
            setIsShowing(
              true
            );
          } }
        >
          <span className='material-symbols-outline'>cancel</span>
        </button>
        { children }
      </div>
    );
  }
  return (
    <button
      onClick={ () => {
        router.back();
        setIsShowing(
          false
        );
      } }
    >
      <span className='material-symbols-outline'>{ 'cancel' }</span>
    </button>
  );
}
