array1 = [2, 3, 4, 5, 6, 7];

// const doArray = (arr) => {
//   let squar = arr[3] ** 2;
//   arr.splice(3, 1, squar);
//   let result = [...arr];
//   return result;
// };

// console.log(doArray(array1));

const indexThreeSquare = (arr) => {
  return arr.map((item, index) => (index === 3 ? item ** 2 : item));
};

console.log(indexThreeSquare(array1));
