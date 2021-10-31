import { Injectable } from '@angular/core';
import { User } from '../core/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: AngularFirestore) { }

  saveUser(user: User) {
    //write to FirestoreCloud
    this.fireStore.doc(`users/${user.userName}`).set(user);
  }

  getUser(userName: string): Observable<User | undefined> {
    let userDoc = this.fireStore.doc<User>(`users/${userName}`);
    return userDoc.valueChanges();
  }

  getUsers(): Observable<User[]> {
    let userCollection = this.fireStore.collection<User>(`users`);
    return userCollection.valueChanges();
  }
}
