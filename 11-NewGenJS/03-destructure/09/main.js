let user = {
  name: 'John',
  years: 27,
};

const { name, years: age, isAdmin = true } = user;

console.log(name, age, isAdmin);
