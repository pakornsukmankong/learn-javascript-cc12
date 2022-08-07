function Accumulator(startingValue) {
  this.currentValue = startingValue
  this.read = function() {
    this.currentValue += +prompt("Enter Number")
  }
  this.show = function() {
    alert(this.currentValue)
  }
}

let result = new Accumulator(0)

result.read()
result.show()
