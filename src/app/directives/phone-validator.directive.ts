import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhoneValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true }]
})
export class PhoneValidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl){
    if(control.value){
      if (control.value.indexOf("+234") == -1) {
        return{inv: true}
      }
      else{
    if (control.value.length < 10) {
      return {lengthError: true}
    }
    return null
  }
  }
  }
}
