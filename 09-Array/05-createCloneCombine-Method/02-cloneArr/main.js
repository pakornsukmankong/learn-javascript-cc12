
const original = [1,2,3,4]

const doClone = (a) => {
  return a.slice()
}

const newArr = doClone(original)

console.log(newArr)