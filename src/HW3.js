class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(name, age, email) {
        const newUser = new User(name, age, email);
        this.users = [...this.users, newUser];
    }

    findUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }

    filterUsersByAge(minAge) {
        return this.users.filter(user => user.age >= minAge);
    }

    getUserNames() {
        return this.users.map(user => user.name);
    }

    removeUser(email) {
        this.users = this.users.filter(user => user.email !== email);
    }

    getUserByEmailAsync(email) {
        return new Promise((resolve, reject) => {
            const user = this.findUserByEmail(email);
            if (user) {
                resolve(user);
            } else {
                reject(`Користувача з email ${email} не знайдено`);
            }
        });
    }

    addMultipleUsers(...users) {
        this.users = [...this.users, ...users];
    }
}


