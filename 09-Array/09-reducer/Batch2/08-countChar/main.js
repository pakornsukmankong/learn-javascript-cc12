let str = 'I live in Thailand';

let splitStr = str.toLowerCase().split('')

console.log(splitStr)

let result = splitStr.reduce((acc,item) => {
  if (item.trim() !== "") {
    let foundValue = acc[item]
    if (foundValue) {
      acc[item] += 1
    } else {
      acc[item] = 1
    }
    // acc[item] = acc[item] ? acc[item] + 1 : 1
  }

  return acc

},{})

console.log(result)