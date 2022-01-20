import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:'ventana',
    loadChildren: () => import('./ventanas/ventanas.module').then(m => m.VentanasModule)
  },
  {
    path:'',
    component: InicioComponent
  },
  {
    path: '**',
    redirectTo: '#'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
