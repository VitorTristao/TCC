import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-professor',
  templateUrl: './forum-professor.component.html',
  styleUrls: ['./forum-professor.component.css']
})
export class ForumProfessorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegaChatGrupoProfessor(): void {
    this.router.navigate(['/products/chatgrupoprofessor']);
  }

}
