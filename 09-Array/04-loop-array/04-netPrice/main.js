const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
];

const summary = []

sales.forEach((item,index,array) => {
  let objitem = {}
  if (item.discount === undefined) {
    objitem.netPrice = item.price
    summary.push(objitem)
  } else {
    netPrice = item.price - (item.price * item.discount)
    objitem.netPrice = netPrice
    summary.push(objitem)
  }

})

console.log(summary)

