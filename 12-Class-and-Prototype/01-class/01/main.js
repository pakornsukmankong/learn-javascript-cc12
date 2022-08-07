class Calculator {
  value;

  constructor(value) {
    this.value = value;
  }
  sum(add) {
    let totalSum = this.value + add;
    return totalSum;
  }
  subtract(sub) {
    let totalSub = this.value - sub;
    return totalSub;
  }
  multiply(mul) {
    let totalMul = this.value * mul;
    return totalMul;
  }
  divide(div) {
    let totalDiv = this.value / div;
    return totalDiv;
  }
  show() {
    return alert(this.value);
  }
}

const a = new Calculator(10);
const b = new Calculator(20);

console.log(a.sum(2));
console.log(a.subtract(2));
console.log(a.multiply(2));
console.log(a.divide(2));
console.log(a.show());
