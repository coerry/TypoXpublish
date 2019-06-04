import { Injectable, OnInit, OnDestroy } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store, Actions, ofActionSuccessful } from '@ngxs/store';
import { Login, Logout } from '../store/auth.actions';
import { ToasterService } from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private authSub: Subscription;
  private toasterSub: Subscription;

  constructor(public afAuth: AngularFireAuth, private router: Router, private store: Store, private toaster: ToasterService, private actions$: Actions) {
    this.authSub = this.afAuth.authState.subscribe(user => {
      if (user && user.uid) {
        this.store.dispatch(new Login(user));
      }
    });

    this.toasterSub =
      this.actions$
        .pipe(ofActionSuccessful(Login))
        .subscribe(() => {
          this.toaster.pop('success', 'You are now logged in!', '');
        });

    this.toasterSub.add(this.actions$
      .pipe(ofActionSuccessful(Logout))
      .subscribe(() => {
        this.toaster.pop('success', 'You are now logged out!', '');
        this.router.navigate(['/login']);
      }));
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
    if (this.toasterSub) {
      this.toasterSub.unsubscribe();
    }
  }

  get isLoggedIn(): boolean {
    const state = this.store.selectSnapshot((state) => state);
    return state && state.auth && state.auth.user;
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
    if (this.isLoggedIn) {
      await this.afAuth.auth.signOut();
      this.store.dispatch(new Logout());
    }
  }
}


