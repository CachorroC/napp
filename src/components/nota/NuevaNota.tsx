'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import note from './note.module.scss';
import { fixFechas } from '#@/lib/fix';

type FormValues = {
  titulo: string;
  llaveProceso: string;
  contenido: string;
  fecha: Date;
};

export function NewNota({ llaveProceso }: { llaveProceso: string }) {
  const now = new Date();

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      titulo: fixFechas(now.toString()),
      llaveProceso: llaveProceso,
      contenido: '',
      fecha: now,
    },
  });
  const onSubmit: SubmitHandler<FormValues> = async (data: unknown) => {
    alert(JSON.stringify(data));
    const idk = await fetch('/api/procesos/post', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    const jsondt = await idk.json();
    alert(jsondt);
    return jsondt;
  };

  return (
    <div className={note.container}>
      <form className={note.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='titulo'>titulo</label>
          <input placeholder='titulo' {...register('titulo')} />
        </div>

        <input
          type='date'
          placeholder={now.toISOString()}
          {...register('fecha', {
            required: true,
          })}
        />
        <div>
          <label htmlFor='contenido'>agregue su nota</label>
          <textarea {...register('contenido', { required: true })} />
        </div>
        <input
          defaultValue={llaveProceso}
          type='text'
          placeholder={llaveProceso}
          {...register('llaveProceso', { required: true })}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
