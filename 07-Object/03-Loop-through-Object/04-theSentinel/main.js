const THE_SENTINEL = 'stop'

function createObjectFromUserInput () {
  const result = {}

  // Modified Object
  let key;
  let value;
  do {
    key = prompt("Enter Key")
    value = prompt("Enter Value") 
    if (key !== null && key !== '' && (key !== THE_SENTINEL && value !== THE_SENTINEL)) {
      //Update
      result[key] = value

    }

  } while (key !== THE_SENTINEL && value !== THE_SENTINEL)
  


  return result
}

let user = createObjectFromUserInput()

console.log(user)