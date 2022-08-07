const fruits = () => {
  result = {}
  key = prompt("Enter key")
  value = +prompt("Enter value")
  if (key.slice(-1) === 's' && value > 1) {
    result[key+'es'] = value
  } 
  else if (value > 1) {
    result[key+'s'] = value
  } else {
    result[key] = value
  }


  

  return result
}

let list = {}

list = fruits()

console.log(list)