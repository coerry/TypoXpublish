
export class Login {
    static readonly type = 'Login';

    constructor(public email: string, public password: string) {}
}

export class Logout {
    static readonly type = 'Logout';
}

export class RegisterAndLogin {
    static readonly type= 'Register and Login';

    constructor(public email: string, public password: string) {}
}