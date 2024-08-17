import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
})
export class AdditionalInformationComponent {
  // @Output() colorSelected = new EventEmitter<string>();
  submitChildForm() {
    console.log();
    // if (form.valid) {
    //   this.colorSelected.emit(form.value.color);
    //   console.log('Formulario hijo guardado:', form.value);
    // }
  }
} 
