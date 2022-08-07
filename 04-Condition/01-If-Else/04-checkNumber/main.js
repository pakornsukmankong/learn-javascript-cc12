let num = prompt("insert number")

if (num === null ||num === '' || num.trim() === '' || isNaN(num)){
  alert("Invalid Number")
} else {
  
  if (num > 0) {
    alert("positive number")
  } else if ( +num === 0) {
    alert("Zero")
  } else {
    alert("Negative number")
  }
}
