let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

// INPUT : Object 
// OUTPUT : sum of salaries => Number
let calSalaries = (obj) => {
  let sum = 0

  for (let key in obj){
    let currentSalary = obj[key]
    sum += currentSalary
  }

  return sum
}

console.log(calSalaries(salaries))