import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Team } from 'src/app/models/team/team';
@Injectable()
export class Teams {
  public data!: Array<any>;
  constructor(private db: AngularFirestore) {}
  readLatest() {}
}
