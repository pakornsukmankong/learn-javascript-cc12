let number = +prompt("Insert Number")

let counter = 0

while (number) {
  let remainder = number % 10 //7
  number = (number - remainder) / 10 //456
  counter++;
}

console.log(counter)

//counter = 0
// ex. 4567 >>>> 4
// 456 >>> 3
// 45 >>>2
// 4 >>>1

