const ucFirst  = (str) => {
  if (!str) {
    return "This function now allow empty string"
  }

  let newString = str.trim()
  let firstChar = newString[0]
  let leftString = newString.slice(1)
  return firstChar.toUpperCase() + leftString
}

console.log(ucFirst("str"))
console.log(ucFirst("  str " ))