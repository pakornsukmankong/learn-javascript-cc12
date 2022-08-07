let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

let result = names.reduce((acc,item)=> {
  // Do logic 

  // Add Property to Object 
  let currentKey = acc[item]
  if (!currentKey) {
    acc[item] = 1
  } else {
    acc[item] = acc[item] + 1
  }
  // acc[item] = acc[item] ? acc[item] + 1 : 1

  return acc
},{})

console.log(result)