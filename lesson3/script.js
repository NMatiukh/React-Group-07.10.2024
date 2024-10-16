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
  
    addUser(user) {
        this.users = [...this.users, user];
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
            const user = this.users.find(user => user.email === email);
            if (user) {
                console.log(`User found: ${user.name}!`);
                resolve(user);
            } else {
                reject(`User with email: ${email} not found.`);
            }
        });
    }

    addMultipleUsers(...users) {
        this.users = [...this.users, ...users];
    }

    getAllUsers() {
        return this.users;
    }
}
  
const userManager = new UserManager();

const user1 = new User("Ivan", 30, "ivan@google.com");
const user2 = new User("Petro", 25, "petro@google.com");
const user3 = new User("Maria", 19, "maria@google.com");
  
userManager.addUser(user1);
userManager.addUser(user2);
userManager.addUser(user3);

console.table(userManager.getAllUsers());

console.log(userManager.findUserByEmail("ivan@google.com"));
console.table(userManager.filterUsersByAge(20));
console.table(userManager.getUserNames());

userManager.removeUser("petro@google.com");

console.table(userManager.getAllUsers());

userManager.getUserByEmailAsync("maria@google.com");

const user4 = new User("Olga", 40, "olga@google.com");
const user5 = new User("Oleg", 35, "oleg@google.com");

userManager.addMultipleUsers(user4, user5);

console.table(userManager.getAllUsers());