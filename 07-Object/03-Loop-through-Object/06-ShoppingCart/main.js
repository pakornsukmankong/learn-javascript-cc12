let name = prompt('Enter name');
let amount = +prompt('Enter amout');
let price = +prompt('Enter Price');
let discount = +prompt('Enter discount');

products = { discount: 0 };

products = { ...products, name, amount, price, discount };

// const products = {
//   name: 'car',
//   amount: 2,
//   price: 50,
//   discount: 0,
// };

console.log(products);

const calcPrice = (obj) => {
  let discountPrice = obj.amount * obj.price * (obj.discount / 100);
  let totalPrice = obj.amount * obj.price + discountPrice;
  return totalPrice;
};

console.log(calcPrice(products));
alert(`Net Total: ${calcPrice(products)}`);
