let total = 0
let evenTotal = 0
let oddTotal = 0
let sumSquareDifferent = 0

for(let i = 1; i <= 100; i++) {
  total += i
  if (i%2 === 1){
    evenTotal += i
  }
  if (i%2 === 0){
    oddTotal += i
  }
  if (i%3 === 0) {
    sumSquareDifferent -= i ** 2;
  }
}

console.log("SumAllNumber",total)
console.log("sumEvenNumber",evenTotal)
console.log("sumOddNumber",oddTotal)
console.log("sumSquareDifferent",sumSquareDifferent)