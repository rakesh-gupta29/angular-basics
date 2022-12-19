import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  public contacts: Array<Contact> = [];

  constructor(private router: ActivatedRoute) {
    this.contacts = [
      new Contact(
        'Rakesh Gupta',
        '123567890',
        'info@rakesh.tech',
        'https://media.istockphoto.com/id/1313673729/photo/building-in-shape-of-smiling-emoji-blinking-with-tongue-out-in-the-middle-of-downtown-city.jpg?b=1&s=170667a&w=0&k=20&c=TG480cXl6ACrIathYTOeX0M3KgKDR1qEHtnNmRuMhjQ=',
        false
      ),
      new Contact(
        'Ved Prakash',
        '123567890',
        'info@ved.tech',
        'https://media.istockphoto.com/id/1313673729/photo/building-in-shape-of-smiling-emoji-blinking-with-tongue-out-in-the-middle-of-downtown-city.jpg?b=1&s=170667a&w=0&k=20&c=TG480cXl6ACrIathYTOeX0M3KgKDR1qEHtnNmRuMhjQ=',
        false
      ),
      new Contact(
        'Dummy Contact',
        '123567890',
        'info@dummy.check',
        'https://media.istockphoto.com/id/1313673729/photo/building-in-shape-of-smiling-emoji-blinking-with-tongue-out-in-the-middle-of-downtown-city.jpg?b=1&s=170667a&w=0&k=20&c=TG480cXl6ACrIathYTOeX0M3KgKDR1qEHtnNmRuMhjQ=',
        false
      ),
    ];
  }

  ngOnInit(): void {}
}
