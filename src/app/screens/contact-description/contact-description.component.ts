import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
@Component({
  selector: 'app-contact-description',
  templateUrl: './contact-description.component.html',
  styleUrls: ['./contact-description.component.css'],
})
export class ContactDescriptionComponent implements OnInit {
  private id: string = '';
  public contact: Contact = new Contact(
    'Rakesh Gupta',
    '1234567890',
    'costomeail@gmail.com',
    'https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    false
  );
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }
}
