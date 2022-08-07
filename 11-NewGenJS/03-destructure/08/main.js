const checkAge = (user) => {
  const { firstName, lastname, age } = user;

  if (age > 18) {
    return `Hello ${firstName} ${lastname}`;
  } else {
    return 'You not allow';
  }
};

const user = {
  firstName: 'Pakorn',
  lastname: 'Sukmankong',
  age: 15,
};

console.log(checkAge(user));
