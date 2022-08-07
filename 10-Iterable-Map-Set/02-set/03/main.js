
const values = [1, 4, 8, 2, 1, 3, 3, 8];

const unique = (array) => {
  const mySet = new Set(array)
  const newArray = Array.from(mySet)

  return newArray
}


console.log(unique(values)); // [1, 4, 8, 2, 3]
