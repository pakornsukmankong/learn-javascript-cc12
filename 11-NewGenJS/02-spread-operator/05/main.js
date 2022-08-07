// Math.random() // 0 to 0.99999999
// [1,2,3,4,5,6] // 0,1,2,3,4,5,6
// Math.random() * arr.length // [0 to arr.length]
// Math.floor(Math.random() * arr.length) // 0 , 1 ,2 ,..... arr.length-1

const removeRandom = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  arr.splice(randomIndex, 1);
  return arr;
};

console.log(removeRandom([1, 2, 3, 4, 5, 6, 7, 8, 9]));
