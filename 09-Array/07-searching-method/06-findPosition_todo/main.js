const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

let index = tasks.findIndex((item) => {
  if (item.id === 2) {
    return item;
  }
});

console.log(index);
