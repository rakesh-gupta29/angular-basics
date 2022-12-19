import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public isPasswordOn: boolean = false;

  constructor(private router: Router) {}
  loginForm = new FormGroup({
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
    console.log(this.loginForm.value);
    this.router.navigate(['/']);
  }
  togglePwdView(target?: boolean) {
    if (target) this.isPasswordOn = target;
    else this.isPasswordOn = !this.isPasswordOn;
  }
}
