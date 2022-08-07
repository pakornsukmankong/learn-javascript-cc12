let number = prompt("Enter Number")

let sum = 0

while (number) {
  let remainder = number % 10
  number = (number - remainder) / 10
  sum += remainder
}
alert(sum)