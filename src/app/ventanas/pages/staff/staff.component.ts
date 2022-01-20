import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styles: [
  ]
})
export class StaffComponent {

  informacion: any [] = [
    {
      img: '../../../../assets/4.jpg',
      nombre: 'Víctor Castillo',
      cargo: 'Nutricionista',
      descripcion: 'Nutricionista avalado por la Universidad Autonoma'
    },
    {
      img: '../../../../assets/2.jpg',
      nombre: 'Monica Aguilera',
      cargo: 'Medico del deporte',
      descripcion: 'Medico del deporte avalado por la Universidad Autonoma'
    },
    {
      img: '../../../../assets/3.jpg',
      nombre: 'Nayeli Luna',
      cargo: 'Nutricionista',
      descripcion: 'Nutricionista avalado por la Universidad Autonoma',
    },
    {
      img: '../../../../assets/1.jpg',
      nombre: 'Yajaira Ponce',
      cargo: 'Coach',
      descripcion: 'Coach avalado por la Universidad Autonoma',
    }
  ];

  constructor() { }

  



}
