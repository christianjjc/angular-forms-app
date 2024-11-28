import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  selector: 'app-switches-page',
  standalone: false,
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css',
})
export class SwitchesPageComponent {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService
  ) {}

  isValidField(field: string): boolean | null {
    return this.validatorService.isValidField(this.myForm, field);
    // return (
    //   this.myForm.controls[field].errors && this.myForm.controls[field].touched
    // );
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }
}
