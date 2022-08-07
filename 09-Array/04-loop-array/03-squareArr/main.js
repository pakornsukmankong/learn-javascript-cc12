


// const squareArr = (item,index,array) => {
//   arr[index] = item**2
// }

// arr.forEach(squareArr)

// console.log(arr)

//====================Another Solution============================

const squareArr = (arr) => {
  const resultArr = []

  arr.forEach(item => {
    let squareNum = item ** 2
    resultArr.push(squareNum)
  })
  return resultArr
}

const arr = [2, 3, 5, 7, 11];

console.log(squareArr(arr))
