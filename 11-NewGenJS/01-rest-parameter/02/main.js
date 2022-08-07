const filterOutOdds = (...numbers) => {
  let result = numbers.filter((item) => {
    if (item % 2 === 0) {
      return item;
    }
  });
  return result;
};

console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
