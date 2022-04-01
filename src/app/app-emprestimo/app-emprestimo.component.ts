import { Component, OnInit } from '@angular/core';
import { Saldo } from './../models/saldo.model';
import { SaldoService } from './../services/saldo.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';


@Component({
  selector: 'app-app-emprestimo',
  templateUrl: './app-emprestimo.component.html',
  styleUrls: ['./app-emprestimo.component.scss']
})
export class AppEmprestimoComponent implements OnInit {

  saldos: any[];
  transferencias: any[];


  //Area Cliente
  nomeUser: string;
  agenciaUser: string;
  contaUser: string;
  passwordUser: string;
  montante: number;
  emprestimo: number;

  //Area Formulario
  instituicao: string;
  tipoConta: string;
  agencia: number;
  conta: string;
  valor: number;

  constructor(
    private service: TransferenciaService,
    private saldoService: SaldoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.saldoService.todoSaldo().subscribe((saldos: Saldo[]) => {
      this.saldos = saldos;
    });
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    });
  }


  fazerEmprestimo(){
    this.instituicao = "Empréstimo";
    this.tipoConta = "Empréstimo";
    this.agencia = 0;
    this.conta = "Empréstimo";
    this.valor = this.emprestimo;

    const valorEmitir: Transferencia = {
      instituicao: this.instituicao,
      tipoConta: this.tipoConta,
      agencia: this.agencia,
      conta: this.conta,
      valor: this.valor,
    };
      this.montante = this.saldos[this.saldos.length - 1]['montante'] + this.emprestimo;
      this.nomeUser = this.saldos[this.saldos.length - 1]['nomeUser'];
      this.agenciaUser = this.saldos[this.saldos.length - 1]['agenciaUser'];
      this.contaUser = this.saldos[this.saldos.length - 1]['contaUser'];
      this.passwordUser = this.saldos[this.saldos.length - 1]['passwordUser'];
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
        this.router.navigateByUrl('extrato');
        console.log(money);
      },
      (error) => console.error(error)
    );
  }

}
