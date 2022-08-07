class Sale {
  name;

  constructor(name) {
    this.name = name;
  }
  calcPrice() {
    let result = amount * price;
    return result;
  }
}

class Beverage extends Sale {
  name;
  amount;
  price;
  discount;

  constructor(name, amount, price, discount) {
    super(name, amount, price, discount);
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.discount = discount;
  }
}

const beverage = new Beverage('Pepsi', 3, 9, 10);

console.log(beverage);

console.log(beverage.calcPrice());
