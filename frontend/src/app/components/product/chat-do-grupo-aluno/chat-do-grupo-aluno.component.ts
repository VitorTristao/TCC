import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-do-grupo-aluno',
  templateUrl: './chat-do-grupo-aluno.component.html',
  styleUrls: ['./chat-do-grupo-aluno.component.css']
})
export class ChatDoGrupoAlunoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegaResenhaColetivaAluno(): void {
    this.router.navigate(['/products/resenhacoletivaaluno']);
  }

  navegaFormularioAvaliacaoAluno(): void {
    this.router.navigate(['/products/formularioavaliacaoaluno']);
  }

}
