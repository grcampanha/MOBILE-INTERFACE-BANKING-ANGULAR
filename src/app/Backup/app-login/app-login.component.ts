import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { Saldo } from './../models/saldo.model';
import { SaldoService } from './../services/saldo.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  logins: any[];

  public usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }
}
