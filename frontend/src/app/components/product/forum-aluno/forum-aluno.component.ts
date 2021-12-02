import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-aluno',
  templateUrl: './forum-aluno.component.html',
  styleUrls: ['./forum-aluno.component.css']
})
export class ForumAlunoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegaGrupoAluno(): void {
    this.router.navigate(['/products/chatgrupoaluno']);
  }

}
