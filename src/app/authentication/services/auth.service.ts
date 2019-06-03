import { Injectable, OnInit, OnDestroy } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { Login, Logout } from '../store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{

  private authSub: Subscription;

  constructor(public afAuth: AngularFireAuth, private router: Router, private store: Store) {
    this.authSub = this.afAuth.authState.subscribe(user => {
      if (user && user.uid) {
        this.store.dispatch(new Login(user));
      } else {
        this.store.dispatch(new Logout());
      }
    });
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }

  get isLoggedIn(): boolean {
    const user = this.store.selectSnapshot((state) => state.auth.user);
    return user != null;
  }

  register(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  loginWithEmail(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}


