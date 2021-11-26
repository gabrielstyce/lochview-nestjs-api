import { ReservaStatusTipo } from '.prisma/client';

export class CreateReservaStatusData {
  reservaId!: string;
  observacao!: string | null;
  status!: ReservaStatusTipo;
}
