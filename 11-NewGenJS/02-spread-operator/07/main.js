const cloneObject = (obj) => {
  return { ...obj };
};

const testObj = { name: 'Flok', age: 12 };

console.log(cloneObject(testObj));
