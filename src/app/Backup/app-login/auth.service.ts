import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Saldo } from './../models/saldo.model';
import { SaldoService } from './../services/saldo.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  saldos: any[];
  nomeUser: string;
  agenciaUser: string;
  contaUser: string;
  passwordUser: string;
  montante: number;

  ngOnInit(): void {
    this.saldoService.todoSaldo().subscribe((saldos: Saldo[]) => {
      this.saldos = saldos;
    });
  }


  constructor(private router: Router, private saldoService: SaldoService) { }

  fazerLogin(usuario: Usuario){
    if(usuario.agencia == 1 &&
        usuario.conta == "1" &&
        usuario.senha == "1"){

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigateByUrl('home');
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      document.getElementById("login").classList.add('none');
      document.getElementById("erro").classList.remove('escondido');
    }
  }
}
