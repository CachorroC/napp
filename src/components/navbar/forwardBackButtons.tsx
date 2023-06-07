'use client';

import { useNoter } from '#@/app/notes-context';
import { useRouter } from 'next/navigation';
import navbar from '#@/components/navbar/navbar.module.scss';

export default function FBButtons() {
  const [ isShowing, setIsShowing ] = useNoter();
  const router = useRouter();
  return (
    <>
      <button
        type='button'
        className={navbar.button}
        onClick={() => router.back()}
      >
        <span className='material-symbols-outlined'>undo</span>
      </button>
      <button
        type='button'
        className={navbar.button}
        onClick={() => {
          setIsShowing(
            !isShowing
          );
        }}
      >
        <span className='material-symbols-outlined'>note</span>
      </button>
      <button
        type='button'
        className={navbar.button}
        onClick={() => router.forward()}
      >
        <span className='material-symbols-outlined'>redo</span>
      </button>
    </>
  );
}
