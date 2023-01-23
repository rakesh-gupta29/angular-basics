import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public oldPwdOn: boolean = false;
  public newPwdOn: boolean = false;

  constructor(private router: Router) {}
  pwdResetForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
    confirmNewPassword: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  handleFormSubmission(): void {
    if (
      this.pwdResetForm.controls['newPassword'].value !==
      this.pwdResetForm.controls['confirmNewPassword'].value
    ) {
      this.pwdResetForm.controls['confirmNewPassword'].setErrors({
        mismatch: true,
      });
      return;
    }
    console.log(this.pwdResetForm.value);
  }
  toggleOldPwdView() {
    this.oldPwdOn = !this.oldPwdOn;
  }
  toggleNewPwdView() {
    this.newPwdOn = !this.newPwdOn;
  }
}
