import { AuthService } from './app-login/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaldoService } from './services/saldo.service';
import { Saldo } from './models/saldo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Challenge';

  saldos: any[];
  mostrarMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private saldoService: SaldoService
  ) {}

  ngOnInit() {
    this.saldoService.todoSaldo().subscribe((saldos: Saldo[]) => {
      this.saldos = saldos;
    });
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }

  sair() {
    this.router.navigateByUrl('');
    location.reload;
    this.mostrarMenu = false;
  }
}
