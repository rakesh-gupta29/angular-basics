import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact';
import { WarningModal } from 'src/app/services/warningModal/warning-modal';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  public contacts!: Array<Contact>;
  constructor(private warningModal: WarningModal) {}

  ngOnInit(): void {
    this.contacts = [
      new Contact(
        '100',
        'dummy name',
        'dummy email',
        'dummy message',
        'madhya pradesh',
        '1234567890',
        'business inquiry'
      ),
      new Contact(
        '100',
        'dummy name',
        'dummy email',
        'dummy message',
        'madhya pradesh',
        '1234567890',
        'business inquiry'
      ),
      new Contact(
        '100',
        'dummy name',
        'dummy email',
        'dummy message',
        'madhya pradesh',
        '1234567890',
        'business inquiry'
      ),
      new Contact(
        '100',
        'dummy name',
        'dummy email',
        'dummy message',
        'madhya pradesh',
        '1234567890',
        'business inquiry'
      ),
      new Contact(
        '100',
        'dummy name',
        'dummy email',
        'dummy message',
        'madhya pradesh',
        '1234567890',
        'business inquiry'
      ),
      new Contact(
        '100',
        'dummy name',
        'dummy email',
        'dummy message',
        'madhya pradesh',
        '1234567890',
        'business inquiry'
      ),
      new Contact(
        '100',
        'dummy name',
        'dummy email',
        'dummy message',
        'madhya pradesh',
        '1234567890',
        'business inquiry'
      ),
      new Contact(
        '100',
        'dummy name',
        'dummy email',
        'dummy message',
        'madhya pradesh',
        '1234567890',
        'business inquiry'
      ),
    ];
  }

  deleteItem() {
    console.log('deleting item');
  }
  handleDelete(id: string) {
    this.warningModal.activate(this.deleteItem);
  }
}
