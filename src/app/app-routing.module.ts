import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './page/sobre/sobre.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    title: 'Gabriel Augusto | Desenvolvedor de Software Full-Stack - Portfólio',
    component: HomeComponent,
    data: {
      description: 'Portfólio profissional de Gabriel Augusto, Desenvolvedor Full-Stack especializado em Angular, React, TypeScript, Python e Java.'
    }
  },
  {
    path: 'sobre',
    title: 'Sobre Mim | Gabriel Augusto - Desenvolvedor Full-Stack',
    component: SobreComponent,
    data: {
      description: 'Conheça mais sobre Gabriel Augusto, minhas habilidades em Frontend, Backend, Banco de Dados, Cloud e trajetória profissional.'
    }
  },
  {
    path: 'projects',
    title: 'Projetos | Gabriel Augusto - Portfólio de Software',
    component: ProjectsComponent,
    data: {
      description: 'Explore os projetos desenvolvidos por Gabriel Augusto: PlanEdu, Easy Plani, Bem-Estar Digital, dashboards analíticos e muito mais.'
    }
  },
  {
    path: 'contato',
    title: 'Contato | Gabriel Augusto - Desenvolvedor de Software',
    component: ContactComponent,
    data: {
      description: 'Entre em contato com Gabriel Augusto para oportunidades de trabalho, colaborações e desenvolvimento de projetos de software.'
    }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
