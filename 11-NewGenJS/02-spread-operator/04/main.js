const doubleAndReturnArgs = (arr, ...numbers) => {
  let mapNums = numbers.map((item) => {
    return item * 2;
  });
  let result = [[...arr], ...mapNums];

  return result;
};

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));
