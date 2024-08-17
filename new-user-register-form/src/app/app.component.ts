import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  myParentForm: FormGroup;
  //selectedColor: string = ''; // Color seleccionado
  
  constructor(private fb: FormBuilder) {
    this.myParentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      number: ['', Validators.required],
      password: ['', Validators.required],
      file: ['', Validators.required]
    }); // Agregar mas validators
  }
  
  // onColorSelected(color: string) {
  //   this.selectedColor = color; // Actualizar el color seleccionado
  // }

  submitParentForm() {
    if (this.myParentForm.valid) {
      console.log('Formulario padre guardado:', this.myParentForm.value);
    }
  }
}
