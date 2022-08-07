const calDigit = (num) => {
  // return num.toFixed(2)
  return (Math.floor(num * 100) /100).toFixed(2)
}

console.log(calDigit(10))
console.log(calDigit(5.1))
console.log(calDigit(3.1289))