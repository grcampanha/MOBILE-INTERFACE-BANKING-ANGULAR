import { AuthService } from './app-login/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppMeusInvestimentosComponent } from './app-meus-investimentos/app-meus-investimentos.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppPixComponent } from './app-pix/app-pix.component';
import { AppFazerPixComponent } from './app-fazer-pix/app-fazer-pix.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { AppEmprestimoComponent } from './app-emprestimo/app-emprestimo.component';


registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent,
    AppNotFoundComponent,
    AppLoginComponent,
    AppMeusInvestimentosComponent,
    AppHomeComponent,
    AppPixComponent,
    AppFazerPixComponent,
    AppEmprestimoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    ],
  providers: [
    AuthService,
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
