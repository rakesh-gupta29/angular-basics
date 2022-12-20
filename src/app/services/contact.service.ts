import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactsCollections!: AngularFirestoreCollection<Contact>;
  private contact$!: Observable<Contact>[];
  constructor(private store: AngularFirestore) {}
}
