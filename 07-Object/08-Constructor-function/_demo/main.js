
// ### Normal Function
function myNornalFN () {
  // some code....
  return 5
}

// when execute
let result = myNornalFN()
console.log(result) //5


// #### Constructor Function

// ต้นแบบ - Prototype
function MyConstructorFN () {
  // some code
}
// when execute
let instance = new MyConstructorFN()


// ##### DEMO 1

function User(name) {
  // this == instance created by new keyword
  // STEP 1 : this = {} // empty object
  // STEP 2 : เพิิ่ม property ให้ object this (S1)
  this.name = name;
  this.isAdmin = true;
  this.address = "";
  this.sayHi = function () {
    alert("Hello")
  }
  // STEP 3 : return this // object with property
  // SUMMERY : this ==== instance created by new keyword
}

//create Instance from Prototype
let user = new User('john');
console.log(user)

let user2 = new User("Jeffy")
console.log(user2)

// alert(user.name); // john
// alert(user.isAdmin); // true