import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;
  nombre: string;
  apellidos: string;
  edad: string;
  tel: string;
  showForm = true;
  showSubmit = false;

  constructor() { }

  ngOnInit() {
    this.formulario = new FormGroup(
      {
        nombre: new FormControl('', Validators.required),
        apellidos: new FormControl('', Validators.required),
        edad: new FormControl('', Validators.required),
        tel: new FormControl('', Validators.required),
      }
    );
  }

  show(event) {
    const idSource = event.target.id;
    console.log(this.formulario.controls[idSource].valid);
    console.log(this.formulario);
  }

  submit() {
    this.nombre = this.formulario.value.nombre;
    this.apellidos = this.formulario.value.apellidos;
    this.tel = this.formulario.value.tel;
    this.edad = this.formulario.value.edad;
    this.showForm = false;
    this.showSubmit = true;
    console.log('esto funciona');
  }

  reload() {
    this.formulario.reset();
    this.showForm = true;
    this.showSubmit = false;
  }
}
