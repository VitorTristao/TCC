import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-da-atividade-aluno',
  templateUrl: './tela-da-atividade-aluno.component.html',
  styleUrls: ['./tela-da-atividade-aluno.component.css']
})
export class TelaDaAtividadeAlunoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegaProduzirResenhaAluno(): void {
    this.router.navigate(['/products/produzirresenhaaluno']);
  }

}
