import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public isPasswordOn: boolean = false;
  public isError: string = '';
  public isLoading: boolean = false;
  constructor(private router: Router, public auth: AngularFireAuth) {}

  signupForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z ]{2,32}'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
  });

  ngOnInit(): void {}
  async handleFormSubmission() {
    this.isLoading = true;
    this.auth
      .createUserWithEmailAndPassword(
        this.signupForm.get('email')?.value as string,
        this.signupForm.controls['password'].value as string
      )
      .then((authData) => {
        console.log(authData);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.isError = err.message;
        this.signupForm.reset();
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
  togglePwdView(target?: boolean) {
    if (target) this.isPasswordOn = target;
    else this.isPasswordOn = !this.isPasswordOn;
  }
}

/*
 name of the  user is to included in the form submission
*/
