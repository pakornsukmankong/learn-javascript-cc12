let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

const multiplyNumeric = (obj,num) => {
  const result = {}

  for (let key in obj) {
    let currentValue = obj[key]
    console.log(currentValue)
    if (typeof currentValue === 'number') {
      result[key] = currentValue * num
    } 
    // else if () {
      
    // }
    else {
      result[key] = currentValue
    }
  }
  return result

}

console.log(multiplyNumeric(menu , 3))