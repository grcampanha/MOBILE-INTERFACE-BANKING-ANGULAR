import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-emprestimo',
  templateUrl: './app-emprestimo.component.html',
  styleUrls: ['./app-emprestimo.component.scss']
})
export class AppEmprestimoComponent implements OnInit {

  emprestimo: number;

  constructor() { }

  ngOnInit(): void {
  }

}
