class User {
    constructor (name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
};

class UserManager {
    constructor () {
        this.users = [];
    };

    addUser(name, age, email) {
        const newby = new User(name, age, email);
        this.users.push({...newby});
    };

    findUserByEmail(mailaddr) {
        return this.users.find(user => user.email === mailaddr);
    };

    filterUsersByAge(minAge) {
        return this.users.filter(user => user.age >= minAge);
    };

    getUserNames() {
        return this.users.map(user => user.name);
    };

    removeUser(email) {
        this.users = [...this.users.filter(user => user.email !== email)];
    };

    addMultipleUsers(usrArr) {
        this.users = [...this.users, ...usrArr];
    };

    getUserByEmailAsync(email) {
        return new Promise ((resolve, reject) => {
            const result = this.users.find(user => user.email === email);
            result ? resolve(result) : reject(new Error("User wasn't find"));
        });
    };
};