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
        this.users.push(new User(name, age, email));
    }

    findUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }

    filterUsersByAge(minAge) {
        return this.users.filter(user => user.age >= minAge);
    }

    getUsersNames(){
        return this.users.map(user => user.name);
    }

    removeUser(email) {
        return this.users = this.users.filter(user => user.email !== email);
    }

    getUserByEmailAsync(email) {
        return new Promise((resolve, reject) => {
            let userByEmail = this.users.find(user => user.email === email);
            if (userByEmail) {
                resolve(userByEmail);
            } else {
                reject('User not found');
            }
        })

    }

    addMultipleUsers(...users) {
        users.forEach((user) => this.users.push(user));
    }
}

const userManager = new UserManager();
userManager.addUser('Morty', 3, 'morty@gmail.com');
userManager.addUser('Harry Potter', 11, 'harry@gmail.com');
userManager.addUser('Frodo Baggings', 60, 'frodo@gmail.com');
console.log(userManager.findUserByEmail('harry@gmail.com'));
console.log(userManager.filterUsersByAge(4));
console.log(userManager.filterUsersByAge(90));
console.log(userManager.getUsersNames());
console.log(userManager.removeUser('frodo@gmail.com'));
console.log(userManager);
userManager.addMultipleUsers('Happy', 'Lovely', {name: 'Bacon', age: 45, email: 'bacon@gmail.com'});
console.log(userManager);
console.log(userManager.getUserByEmailAsync('bacon@gmail.com'));
userManager.getUserByEmailAsync('bacon@gmail.com')
    .then(user => console.log('User found:', user))
    .catch(error => console.error(error));
userManager.getUserByEmailAsync('baco21312313241n@example.com')
    .then(user => console.log('User found:', user))
    .catch(error => console.error(error));