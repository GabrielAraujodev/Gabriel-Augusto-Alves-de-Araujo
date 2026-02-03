import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './page/sobre/sobre.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';


const routes: Routes = [
  { path: 'sobre', title: 'Sobre', component: SobreComponent },
  { path: 'projects', title: 'Projetos', component: ProjectsComponent },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'contato', title: 'Contato', component: ContactComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }