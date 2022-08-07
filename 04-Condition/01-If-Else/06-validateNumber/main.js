let num1 = +prompt("Insert First Number")
let num2 = +prompt("Insert Second Number")

let result = (num1 + num2)

if ( (num1,num2) == null ||isNaN(num1) || isNaN(num2) || (num1,num2) == '') {
  alert("Invalid")
} else {
  alert(result)
}