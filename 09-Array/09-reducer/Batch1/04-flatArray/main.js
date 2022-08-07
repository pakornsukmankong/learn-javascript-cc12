let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];

const flatArray = (array) => {
  let flattedArray = array.reduce((acc,item) => {

    acc.push(...item)
    return acc
  },[])
  return flattedArray
}

console.log(flatArray(flattened))