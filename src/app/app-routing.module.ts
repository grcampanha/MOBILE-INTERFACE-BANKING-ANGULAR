import { AppPixComponent } from './app-pix/app-pix.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppMeusInvestimentosComponent } from './app-meus-investimentos/app-meus-investimentos.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { AppFazerPixComponent } from './app-fazer-pix/app-fazer-pix.component';
import { AppEmprestimoComponent } from './app-emprestimo/app-emprestimo.component';

export const routes: Routes = [

  { path: '',  component: AppLoginComponent },
  { path: 'home', component: AppHomeComponent },
  { path: 'meus-investimentos', component: AppMeusInvestimentosComponent },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferenciaComponent },
  { path: 'pix', component: AppPixComponent },
  { path: 'fazer-pix', component: AppFazerPixComponent },
  { path: 'emprestimo', component: AppEmprestimoComponent },
  { path: '404', component: AppNotFoundComponent},
  { path: '**', redirectTo: '/404'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}
