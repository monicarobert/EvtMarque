
class LoginMap extends Map {
    constructor() {
        super();
        this.set('hop', 'hop1');
        this.set('hip', 'hip1');
        this.set('houba', 'houba1');
    }
}

export class Login {
    static loginDB = new LoginMap();

    static userExists(login) {
        return (this.loginDB.get(login) !== undefined);
    }

    static createUser(login, password, data) {
        if (login === undefined || login === '' || password === undefined || password === '')
        {
            console.log("ERROR: Login.createUser : données incorrectes");
            return 1;
        }
        if (this.userExists(login))
        {
            console.log("ERROR: Login.createUser : utilisateur existe");
            return 2;
        }
        this.loginDB.set(login, password);
        console.log("SUCCESS: Login.createUser");

        console.log(this.loginDB);
        return 0;
    };

    static deleteUser(login, password) {
        const pwd = this.loginDB.get(login);
        
        if (pwd === undefined)
            return 1;
        if (!(pwd === password))
            return 2;

        this.loginDB.delete(login);

        console.log(this.loginDB);
        return 0;
    };

    static login(login, password) {
        console.log("Login.login:", login, ',', password)
        const pwd = this.loginDB.get(login);
        if (pwd === undefined)
            return 1;
        if (!(pwd == password))
            return 2;
        console.log("SUCCESS: Login.login");
        return 0;
    };
};
