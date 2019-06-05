import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngxs/store';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';
import { AuthState } from '../store/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthListenerService implements OnDestroy{
  private authSub: Subscription;

  constructor(public afAuth: AngularFireAuth, private store: Store, private authService: AuthService) {
    this.authSub = this.afAuth.authState.subscribe(user => {
      if (user && user.uid) {
      }
      else if (this.store.selectSnapshot(AuthState.loggedIn)){
        authService.logout();
      }
    });
   }

   ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
