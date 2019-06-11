import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LoginComponent } from '../components/login/login.component';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store, Actions } from '@ngxs/store';
import { ToasterService } from 'angular2-toaster';

describe('Auth Service and Login', () => {
  let service: AuthService;
  let spy: any;

  beforeEach(() => {

    service = jasmine.createSpyObj('authService', [auth]);
    });




  afterEach(() => {
                    service = null;
    });


  it('loginWithEmail returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'loginWithEmail').and.returnValues('test@test.de', '1233456');
    expect(service.loginWithEmail).toHaveBeenCalled();

  });
});
