import { Injectable } from '@angular/core';
import { User } from '../core/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: AngularFirestore) { }

  addUser(user: User) {
    user.createdOn = Date.now();
    user.userId = user.userName.concat('_', user.createdOn);
    return this.fireStore.doc(`users/${user.userId}`).set(user);
  }

  updateUser(user: User) {
    return this.fireStore.doc(`users/${user.userId}`).update(user);
  }

  getUser(userId: string): Observable<User | undefined> {
    let userDoc = this.fireStore.doc<User>(`users/${userId}`);
    return userDoc.valueChanges();
  }

  deleteUser(userId: string) {
    return this.fireStore.doc<User>(`users/${userId}`)
    .delete();
  }

  getUsers(): Observable<User[]> {
    let userCollection = this.fireStore.collection<User>(`users`);
    return userCollection.valueChanges();
  }
}
