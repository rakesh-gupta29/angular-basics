import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent implements OnInit {
  @Input() public item!: Contact;

  constructor(private router: Router) {}
  public mailTarget: string = 'mailto:';
  ngOnInit(): void {}
  navigateToDetail() {
    const slug = this.item.name.toLocaleLowerCase().split(' ').join('-');
    this.router.navigate(['/contact', slug]);
  }
}
