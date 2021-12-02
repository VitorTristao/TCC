import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-disciplina-aluno',
  templateUrl: './tela-disciplina-aluno.component.html',
  styleUrls: ['./tela-disciplina-aluno.component.css']
})
export class TelaDisciplinaAlunoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegaTelaDaAtividadeAluno(): void {
    this.router.navigate(['/products/telaatividadealuno']);
  }

  navegaForumAluno(): void {
    this.router.navigate(['/products/forumaluno']);
  }

}
