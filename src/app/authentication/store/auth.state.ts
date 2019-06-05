import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Login, Logout, RegisterAndLogin } from './auth.actions';
import { AuthService } from '../services/auth.service';

import { tap } from 'rxjs/operators';

export interface AuthStateModel {

    email: string;
    //We dont have a backend server to verify idToken for requests, may as well store uid instead
    uid: string;
    
}

@State<AuthStateModel>({
    name: 'auth'
})
export class AuthState {
    @Selector()
    static loggedIn(state: AuthStateModel) : boolean {
        return state.uid && state.uid !== '';
    }

    constructor(private authService: AuthService) { }

    @Action(Login) login(context: StateContext<AuthStateModel>, action: Login) {
        return this.authService.loginWithEmail(action.email, action.password).pipe(tap(userCredential => {
            context.patchState({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
            });
        }));
    }

    @Action(Logout) logout(context: StateContext<AuthStateModel>) {
        return this.authService.logout().pipe(tap(() => {
            context.patchState({
                email: '',
                uid: '',
            })
        }));
    }

    @Action(RegisterAndLogin) registerAndLogin(context: StateContext<AuthStateModel>, action: RegisterAndLogin) {
        return this.authService.registerAndLogin(action.email, action.password).pipe(tap(userCredential => {
            context.patchState({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
            });
        }));
    }
}