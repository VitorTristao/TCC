import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from "./components/product/product-update/product-update.component";
import { ProductDeleteComponent } from "./components/product/product-delete/product-delete.component";
import { TelaDisciplinaAlunoComponent } from "./components/product/tela-disciplina-aluno/tela-disciplina-aluno.component";
import { TelaDaDisciplinaProfessorComponent } from "./components/product/tela-da-disciplina-professor/tela-da-disciplina-professor.component";
import { NovaAtividadeProfessorComponent } from "./components/product/nova-atividade-professor/nova-atividade-professor.component";
import { TelaDaAtividadeAlunoComponent } from "./components/product/tela-da-atividade-aluno/tela-da-atividade-aluno.component";
import { ProduzirResenhaAlunoComponent } from "./components/product/produzir-resenha-aluno/produzir-resenha-aluno.component";
import { ForumAlunoComponent } from "./components/product/forum-aluno/forum-aluno.component";
import { ChatDoGrupoAlunoComponent } from "./components/product/chat-do-grupo-aluno/chat-do-grupo-aluno.component";
import { ResenhaColetivaAlunoComponent } from "./components/product/resenha-coletiva-aluno/resenha-coletiva-aluno.component";
import { FormularioAvaliacaoAlunoComponent } from "./components/product/formulario-avaliacao-aluno/formulario-avaliacao-aluno.component";
import { ForumProfessorComponent } from "./components/product/forum-professor/forum-professor.component";
import { ChatDoGrupoProfessorComponent } from "./components/product/chat-do-grupo-professor/chat-do-grupo-professor.component";
import { ResenhaColetivaProfessorComponent } from "./components/product/resenha-coletiva-professor/resenha-coletiva-professor.component";
import { AvaliacaoProfessorComponent } from "./components/product/avaliacao-professor/avaliacao-professor.component";
import { FormularioAvaliacaoProfessorComponent } from "./components/product/formulario-avaliacao-professor/formulario-avaliacao-professor.component";



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "products/teladisciplinaaluno",
    component: TelaDisciplinaAlunoComponent
  },
  {
    path: "products/teladisciplinaprofessor",
    component: TelaDaDisciplinaProfessorComponent
  },
  {
    path: "products/novaatividadeprofessor",
    component: NovaAtividadeProfessorComponent
  },
  {
    path: "products/telaatividadealuno",
    component: TelaDaAtividadeAlunoComponent
  },
  {
    path: "products/produzirresenhaaluno",
    component: ProduzirResenhaAlunoComponent
  },
  {
    path: "products/forumaluno",
    component: ForumAlunoComponent
  },
  {
    path: "products/chatgrupoaluno",
    component: ChatDoGrupoAlunoComponent
  },
  {
    path: "products/resenhacoletivaaluno",
    component: ResenhaColetivaAlunoComponent
  },
  {
    path: "products/formularioavaliacaoaluno",
    component: FormularioAvaliacaoAlunoComponent
  },
  {
    path: "products/forumprofessor",
    component: ForumProfessorComponent
  },
  {
    path: "products/chatgrupoprofessor",
    component: ChatDoGrupoProfessorComponent
  },
  {
    path: "products/resenhacoletivaprofessor",
    component: ResenhaColetivaProfessorComponent
  },
  {
    path: "products/formularioavaliacaoprofessor",
    component: FormularioAvaliacaoProfessorComponent
  },
  {
    path: "products/avaliacaoprofessor",
    component: AvaliacaoProfessorComponent
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}