const multiplyNum = (...numbers) => {
  let result = numbers.reduce((acc, curr) => {
    let total = acc * curr;
    return total;
  }, 1);
  return result;
};

console.log(multiplyNum(2, 3, 4));
