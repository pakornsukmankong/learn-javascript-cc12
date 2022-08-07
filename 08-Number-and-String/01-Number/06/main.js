const randomNumber = (min,max) => {
  
  let diff = Math.random() * (max - min)

  return (min + diff).toFixed(2)
}

console.log(randomNumber(2,9))

