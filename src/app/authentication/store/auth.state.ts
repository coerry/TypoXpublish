import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Login, Logout } from './auth.actions';

export interface AuthStateModel {
    //TODO save only relevant data like tokens and email to be less dependent on firebase, low prio
    user: firebase.User;
}

@State<AuthStateModel>({
    name: 'auth'
})
export class AuthState {
    @Action(Login) login(context: StateContext<AuthStateModel>, action: Login) {
        context.patchState({
            user: action.user,
        });
    }

    @Action(Logout) logout(context: StateContext<AuthStateModel>, action: Logout) {
        context.patchState({
            user: null
        });
    }
}