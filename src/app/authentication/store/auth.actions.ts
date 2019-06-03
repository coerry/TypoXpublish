export class Login {
    static readonly type = 'Login';

    constructor(public user: firebase.User) {}
}

export class Logout {
    static readonly type = 'Logout';

    constructor() {}
}