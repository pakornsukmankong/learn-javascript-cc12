let invest = 100000
let rate = 0.025 
let years = 10

for (i = 1; i <= years; i++) {
  invest += invest * rate
}

console.log(invest.toFixed(0))

console.log(`In year ${years} you will have ${invest}` )


/*


*/