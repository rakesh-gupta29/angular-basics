import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Contact } from 'src/app/models/contact';
@Component({
  selector: 'app-contact-description',
  templateUrl: './contact-description.component.html',
  styleUrls: ['./contact-description.component.css'],
})
export class ContactDescriptionComponent implements OnInit {
  public id: string = '';
  public contact: Contact = new Contact(
    'Rakesh Gupta',
    '1234567890',
    'costomemail@gmail.com',
    'https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    false
  );
  constructor(private activeRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
    });
  }
}
