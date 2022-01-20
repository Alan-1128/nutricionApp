import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { StaffComponent } from './pages/staff/staff.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'contacto', component:ContactoComponent},
      {path:'staff', component:StaffComponent},
      {path:'**', redirectTo:'staff'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentanasRoutingModule { }
