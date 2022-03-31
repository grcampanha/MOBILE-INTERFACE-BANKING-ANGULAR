import { Saldo } from './../models/saldo.model';
import { SaldoService } from './../services/saldo.service';
import { TransferenciaService } from '../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from './../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];
  saldos: any[];

  filter: string;

  constructor(
    private service: TransferenciaService,
    private saldoService: SaldoService
  ) {}


  ngOnInit(): void {
    this.saldoService.todoSaldo().subscribe((saldos: Saldo[]) => {
      this.saldos = saldos;
    });
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    });
  }
}
