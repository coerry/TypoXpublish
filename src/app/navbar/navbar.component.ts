import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AuthState } from '../authentication/store/auth.state';
import { Observable } from 'rxjs';
import { Logout } from '../authentication/store/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  @Select(AuthState.loggedIn) loggedIn$ : Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
