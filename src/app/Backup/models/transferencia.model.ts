export interface Transferencia {
  id?: number;
  instituicao: string;
  tipoConta: string;
  agencia: number | string;
  conta: string;
  valor: number;
  data?: Date;
}
