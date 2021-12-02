import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-do-grupo-professor',
  templateUrl: './chat-do-grupo-professor.component.html',
  styleUrls: ['./chat-do-grupo-professor.component.css']
})
export class ChatDoGrupoProfessorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegaResenhaColetivaProfessor(): void {
    this.router.navigate(['/products/resenhacoletivaprofessor']);
  }

  navegaFormularioAvaliacaoProfessor(): void {
    this.router.navigate(['/products/formularioavaliacaoprofessor']);
  }

}
