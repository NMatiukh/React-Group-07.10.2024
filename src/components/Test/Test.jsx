const Test = function () {
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
      return this.users.push(user);
    }

    addMultipleUsers(...users) {
      users.forEach((user) => this.users.push(user));
    }

    findUserByEmail(email) {
      return this.users.find((user) => user.email === email);
    }

    filterUsersByAge(minAge) {
      return this.users.filter((user) => user.age >= minAge);
    }

    getUsersName() {
      return this.users.map((user) => user.name);
    }

    removeUserByEmail(email) {
      return (this.users = this.users.filter((user) => user.email !== email));
    }

    getUserByEmailAsync(email) {
      return new Promise((resolve, reject) => {
        const user = this.users.find((user) => user.email === email);
        if (user) {
          resolve(user);
        } else {
          reject(new Error(`User with email ${email} not found`));
        }
      });
    }
  }

  const manager = new UserManager();

  const pavlo = new User("Pavlo", 32, "pavlo@example.com");
  const john = new User("John", 16, "john@example.com");
  const james = new User("James", 42, "james@example.com");
  manager.addUser(pavlo);
  manager.addMultipleUsers(john, james);

  console.log(manager.users);
  console.log(manager.findUserByEmail("pavlo@example.com"));
  console.log(manager.filterUsersByAge(18));
  console.log(manager.getUsersName());
  console.log(manager.removeUserByEmail("john@example.com"));
  manager
    .getUserByEmailAsync("pavlo@example.com")
    .then((user) => console.log("User found:", user))
    .catch((error) => console.error("Error:", error.message));
};

export default Test;
