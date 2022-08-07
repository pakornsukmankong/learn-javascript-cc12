const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // property isActive change to false
user = {};
console.log(user); // cant access