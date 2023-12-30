import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './page/sobre/sobre.component';
import { ProjetoComponent } from './page/projeto/projeto.component';
import { HomeComponent } from './page/home/home.component';


const routes: Routes = [
  { path:   'sobre', component: SobreComponent },
  { path:  'projeto', component: ProjetoComponent },
  { path:  'home', component: HomeComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
