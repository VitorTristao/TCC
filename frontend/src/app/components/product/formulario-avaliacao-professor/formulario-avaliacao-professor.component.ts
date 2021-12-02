import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-avaliacao-professor',
  templateUrl: './formulario-avaliacao-professor.component.html',
  styleUrls: ['./formulario-avaliacao-professor.component.css']
})
export class FormularioAvaliacaoProfessorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegaAvaliacaoProfessor(): void {
    this.router.navigate(['/products/avaliacaoprofessor']);
  }

}
