const users = [
  { user: 'Name1' },
  { user: 'Name2', age: 2 },
  { user: 'Name3' },
  { user: 'Name4', age: 4 },
];

for (key of users) {
  const { user, age = 'unknown' } = key;

  console.log(user, age);
}
