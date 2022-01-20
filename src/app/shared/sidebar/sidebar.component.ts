import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  abrir(){
    const containerCall:any = document.querySelector('.container');
    containerCall.classList.toggle("change");
  }


}
