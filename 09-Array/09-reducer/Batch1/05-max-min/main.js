let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

// let min = arr.reduce((acc,curr)=> {
//   return acc < curr ? acc : curr
// },1)

// let max = arr.reduce((acc,curr)=> {
//   return acc > curr ? acc : curr
// },1)

// console.log(min, max)

const findMaxMin = (array) => {
  const initaialValue = {
    max: array[0],
    min: array[0],
  };

  let summary = array.reduce((acc, item) => {
    //Check Max
    if (acc.max < item) {
      acc.max = item;
    }
    //Check Min
    if (acc.min > item) {
      acc.min = item;
    }
    return acc;
  }, initaialValue);

  return summary
};

console.log(findMaxMin(arr))