let n = 4 
let string = ''

for (i=0;i < n; i++) {
  for (j=0; j <= i; j++) {
    string += "* "
  }
  string += "\n"
}

console.log(string.trim())