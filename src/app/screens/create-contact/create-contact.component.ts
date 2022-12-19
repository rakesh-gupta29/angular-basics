import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  createContactForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
    avatarUrl: '',
    isFav: false,
  });
  ngOnInit(): void {}
  handleFormSubmission() {
    console.log(this.createContactForm.value);
    this.router.navigate(['/']);
  }
}
