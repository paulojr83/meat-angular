import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from "../../shared/radio/radio-option.model";
import { ControlValueAccessor, NG_VALUE_ACCESSOR }  from '@angular/forms'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(() => RadioComponent),
    multi: true
  }]
})

export class RadioComponent implements OnInit, ControlValueAccessor {  

  @Input() options:RadioOption[]  
  
  value: any
  onChange: any  

  /* Write a new value to the element.*/
  writeValue(value: any): void {
    this.value = value    
  }

  /* Set the function to be called when the control receives a change event. */
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  /* Set the function to be called when the control receives a touch event. */
  registerOnTouched(fn: any): void {
    console.log('entrou no componente');
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled)
  }
  
  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

}
