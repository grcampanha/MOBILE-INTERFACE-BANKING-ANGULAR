import { SaldoService } from './../services/saldo.service';
import { Transferencia } from './../models/transferencia.model';
import { Saldo } from './../models/saldo.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  transferencias: any[];
  saldos: any[];

  //Area Cliente
  nomeUser: string;
  agenciaUser: string;
  contaUser: string;
  passwordUser: string;
  montante: number;

  //Area Formulario
  instituicao: string;
  tipoConta: string;
  agencia: number;
  conta: string;
  valor: number;

  constructor(
    private service: TransferenciaService,
    private router: Router,
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

  transferir() {
    const valorMaximo = this.saldos[0]['montante'];
    if (this.instituicao == undefined) {
      document.getElementById('erro').classList.remove('escondido');
      document.getElementById('mensagem').innerHTML =
        'selecione uma instituição';
      return;
    }
    if (this.tipoConta == undefined) {
      document.getElementById('erro').classList.remove('escondido');
      document.getElementById('mensagem').innerHTML =
        'selecione um tipo de conta';
      return;
    }
    if (this.agencia == null) {
      document.getElementById('erro').classList.remove('escondido');
      document.getElementById('mensagem').innerHTML = 'informe uma agência';
      return;
    }
    if (this.conta == null) {
      document.getElementById('erro').classList.remove('escondido');
      document.getElementById('mensagem').innerHTML = 'informe uma conta';
      return;
    }
    if (this.valor <= 0 || this.valor > valorMaximo) {
      document.getElementById('mensagem').innerHTML =
        'informe um valor maior que zero';
      document.getElementById('erro').classList.remove('escondido');
      return;
    } else {
      this.montante =
        this.saldos[this.saldos.length - 1]['montante'] - this.valor;
      this.nomeUser = this.saldos[this.saldos.length - 1]['nomeUser'];
      this.agenciaUser = this.saldos[this.saldos.length - 1]['agenciaUser'];
      this.contaUser = this.saldos[this.saldos.length - 1]['contaUser'];
      this.passwordUser = this.saldos[this.saldos.length - 1]['passwordUser'];

      const valorEmitir: Transferencia = {
        instituicao: this.instituicao,
        tipoConta: this.tipoConta,
        agencia: this.agencia,
        conta: this.conta,
        valor: this.valor,
      };
      const saldoEmitir: Saldo = {
        montante: this.montante,
        nomeUser: this.nomeUser,
        agenciaUser: this.agenciaUser,
        contaUser: this.contaUser,
        passwordUser: this.passwordUser,
      };
      this.service.adicionar(valorEmitir).subscribe(
        (resultado) => {
          this.router.navigateByUrl('extrato');
        },
        (error) => console.error(error)
      );
      this.saldoService.adicionar(saldoEmitir).subscribe(
        (money) => {
          console.log(money);
        },
        (error) => console.error(error)
      );
    }
  }
}
