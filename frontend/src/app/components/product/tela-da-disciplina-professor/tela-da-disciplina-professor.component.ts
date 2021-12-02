import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-da-disciplina-professor',
  templateUrl: './tela-da-disciplina-professor.component.html',
  styleUrls: ['./tela-da-disciplina-professor.component.css']
})
export class TelaDaDisciplinaProfessorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegaNovaAtividadeProfessor(): void {
    this.router.navigate(['/products/novaatividadeprofessor']);
  }

  navegaForumProfessor(): void {
    this.router.navigate(['/products/forumprofessor']);
  }

}
