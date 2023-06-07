import { NewNota } from '#@/components/nota/NuevaNota';
export default function Page(
  { params }: { params: { llaveProceso: string } }
) {
  return <NewNota llaveProceso={params.llaveProceso} />;
}
