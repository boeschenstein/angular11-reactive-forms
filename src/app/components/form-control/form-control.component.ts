import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnChanges {
  public firstName: FormControl;
  public lastName: FormControl;

  constructor(private fb: FormBuilder) {
    this.firstName = fb.control(
      'John',
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
      ])
    );
    this.lastName = fb.control('', Validators.required);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.warn('firstName', this.firstName.value);
    console.warn('lastNames', this.lastName.value);
  }
}
