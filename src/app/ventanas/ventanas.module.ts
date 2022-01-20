import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentanasRoutingModule } from './ventanas-routing.module';
import { StaffComponent } from './pages/staff/staff.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StaffComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    VentanasRoutingModule,
    ReactiveFormsModule
  ]
})
export class VentanasModule { }
