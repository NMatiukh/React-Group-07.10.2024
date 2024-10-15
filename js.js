
class User {
   constructor(name, age, email){
      this.name = name;
      this.age = age;
      this.email = email;
   }
}

class UserManager {
   constructor(){
      this.Users = [];
   }
   addUser(name, age, email){
      const user = new User(name, age, email);
      this.Users= [...this.Users, user];
   };
   findUserByEmail(email){
      return this.Users.find(user => user.email === email);
   };
   filterUsersByAge(minAge) {
      return this.Users.filter(user => user.age >= minAge);
   };
   getUserNames() {
      return this.Users.map(user => user.name);
   };
   removeUser(email){
      return this.Users.filter(user => user.email !== email);

   };
   getUserByEmailAsync(email) {
      return new Promise((resolve, reject) => {
         const user = this.Users.find(user => user.email === email);
         if(user) {
            resolve(user)
         } else {
            reject(`користувач з емейлом ${email } не знайдений!`)
         }
      })
   };
  
}
const userManager = new UserManager();
userManager.addUser('ivan', 21, '123@email.com');
userManager.addUser('andrii', 53, 'sobakaSutula@email.com');
userManager.addUser('oleh', 32, '333@email.com');
console.log(userManager.Users);
// console.log(userManager.findUserByEmail('333@email.com'));
// console.log(userManager.filterUsersByAge(52));
// console.log(userManager.getUserNames());
// console.log(userManager.removeUser('123@email.com'));
// console.log(userManager.getUserByEmailAsync('sobaka2Sutula@email.com'));

