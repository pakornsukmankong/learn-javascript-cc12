let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalaries = (salaries) => {
  const values = Object.values(salaries);
  const max = Math.max.apply(Math, values);
  for (key in salaries) {
    console.log(key);
    if (salaries[key] === max) {
      return { [key]: max };
    }
  }
};

console.log(topSalaries(salaries));
