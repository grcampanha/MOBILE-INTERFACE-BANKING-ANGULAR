import { Saldo } from './../models/saldo.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SaldoService {
  private valorSaldo: any[];
  private url = 'http://localhost:7000/saldos';

  constructor(private httpClient: HttpClient) {
    this.valorSaldo = [];
  }

  get transferencias() {
    return this.valorSaldo;
  }

  todoSaldo(): Observable<Saldo[]> {
    return this.httpClient.get<Saldo[]>(this.url);
  }

  adicionar(saldo: Saldo): Observable<Saldo> {
    return this.httpClient.post<Saldo>(this.url, saldo);
  }
}
