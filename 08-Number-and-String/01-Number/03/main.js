function calPoint (sell) {
  let point = Math.floor(sell/100)
  return point
}

console.log(calPoint(159))
console.log(calPoint(6900))