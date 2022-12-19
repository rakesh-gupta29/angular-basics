import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public isPasswordOn: boolean = false;
  constructor(private router: Router) {}

  signupForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern('[A-Za-z ]{2,32}'),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
  });

  ngOnInit(): void {}
  handleFormSubmission() {
    console.log(this.signupForm.value);
    this.router.navigate(['/']);
  }
  togglePwdView(target?: boolean) {
    if (target) this.isPasswordOn = target;
    else this.isPasswordOn = !this.isPasswordOn;
  }
}
