import { MongoClient, WithId } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

export interface monDemandado extends WithId<Document> {
  llaveProceso: string;
  sujetosProcesales: string;
  idProceso: number;
}
