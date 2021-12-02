import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
// import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { TelaDisciplinaAlunoComponent } from './components/product/tela-disciplina-aluno/tela-disciplina-aluno.component';
import { TelaDaAtividadeAlunoComponent } from './components/product/tela-da-atividade-aluno/tela-da-atividade-aluno.component';
import { ProduzirResenhaAlunoComponent } from './components/product/produzir-resenha-aluno/produzir-resenha-aluno.component';
import { ForumAlunoComponent } from './components/product/forum-aluno/forum-aluno.component';
import { ChatDoGrupoAlunoComponent } from './components/product/chat-do-grupo-aluno/chat-do-grupo-aluno.component';
import { ResenhaColetivaAlunoComponent } from './components/product/resenha-coletiva-aluno/resenha-coletiva-aluno.component';
import { FormularioAvaliacaoAlunoComponent } from './components/product/formulario-avaliacao-aluno/formulario-avaliacao-aluno.component';
import { TelaDaDisciplinaProfessorComponent } from './components/product/tela-da-disciplina-professor/tela-da-disciplina-professor.component';
import { NovaAtividadeProfessorComponent } from './components/product/nova-atividade-professor/nova-atividade-professor.component';
import { ForumProfessorComponent } from './components/product/forum-professor/forum-professor.component';
import { ChatDoGrupoProfessorComponent } from './components/product/chat-do-grupo-professor/chat-do-grupo-professor.component';
import { ResenhaColetivaProfessorComponent } from './components/product/resenha-coletiva-professor/resenha-coletiva-professor.component';
import { FormularioAvaliacaoProfessorComponent } from './components/product/formulario-avaliacao-professor/formulario-avaliacao-professor.component';
import { AvaliacaoProfessorComponent } from './components/product/avaliacao-professor/avaliacao-professor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    // ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    TelaDisciplinaAlunoComponent,
    TelaDaAtividadeAlunoComponent,
    ProduzirResenhaAlunoComponent,
    ForumAlunoComponent,
    ChatDoGrupoAlunoComponent,
    ResenhaColetivaAlunoComponent,
    FormularioAvaliacaoAlunoComponent,
    TelaDaDisciplinaProfessorComponent,
    NovaAtividadeProfessorComponent,
    ForumProfessorComponent,
    ChatDoGrupoProfessorComponent,
    ResenhaColetivaProfessorComponent,
    FormularioAvaliacaoProfessorComponent,
    AvaliacaoProfessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
