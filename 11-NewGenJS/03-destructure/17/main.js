const names = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jack', lastName: 'Dann' },
  { firstName: 'Joe', lastName: 'Dunne' },
];

for (key of names) {
  const { firstName, lastName } = key;
  console.log(`Full name: ${firstName} ${lastName}`);
}
