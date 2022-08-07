const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
]

let obj = inventory.find((item) => {
  if (item.name === "cherries") {
    return item.name
  }
  
})

console.log(obj)