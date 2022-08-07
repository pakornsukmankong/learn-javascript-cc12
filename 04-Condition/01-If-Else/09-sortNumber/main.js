let a = prompt("Insert first number")
let b = prompt("Insert second number")
let c = prompt("Insert thrid number")

if ((a,b,c) === null || (a,b,c) === '' || (a,b,c).trim() === "" || isNaN(a,b,c) ) {
  alert("Invalid Number")
} else {
  if (a >= b && b >= c) {
    console.log (a,b,c)
  } else if (a >= c && c >= b) {
    console.log (a,c,b)
  } else if (b >= a && a >= c) {
    console.log (b,a,c)
  } else if (b >= c && c >= a) {
    console.log (b,c,a)
  } else if (c >= a && a >= b) {
    console.log (c,a,b)
  } else if (c >= b && b >= a) {
    console.log (c,b,a)
  }
}
