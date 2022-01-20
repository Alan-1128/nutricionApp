import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [
  ]
})
export class ContactoComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  miFormulario:FormGroup = this.fb.group ({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.minLength(5)]],
    mensaje: ['', [Validators.required, Validators.minLength(5)]],
  })

  validacion(campo:string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }

}
