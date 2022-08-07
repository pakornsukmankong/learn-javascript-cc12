// ============= Method ===============

// const cat = {
//   age : 2,
//   name: "ChaYen",

//   roar() {alert("Meow Meow")},
//   sleep : () => {alert("Dont bother me !!")}
// }

// cat.roar()
// cat.sleep()

//============= THIS ================

//FN-DECLARATION
// function a() {
//   console.log(this)
// }

// a(); // this ==== window
// window.a() // this === window

//FN-EXPRESSION ==> dont attached with window object
// let b = function() {
//   console.log(this)
// }

// b()// this === window
// window.b() // Error : window.b is not a function

//FN-EXPRESSION-ARROW
// let c = () => console.log(this)
// c() // this === window object
// window.c() //Error

// // ########## STRICT MODE

// 'use strict'
// function a() {
//   console.log(this)
// }

// console.log("$$$$$",this) === window /// this === window
// a(); // thi === undefined

// ============= This Method ===============

// let d = {
//   name : "codecamp",
//   age :  12,
//   increase : function (){
//       console.log("IN METHOD INCREASE",this)
//       this.age += 1;
//   },
//   decrease : function () {
//       console.log("IN METHOD DECREASE",this)
//       this.age -= 1;
//   }
// }
// d.increase() // this === who called me? ==== object d
// console.log(d.age)  // 12 + 1
// d.decrease() // this === execute context === object d
// console.log(d.age)  // 12
// d.decrease()
// console.log(d.age)

// ################ chap.3.5 This in METHOD

// function increase() {
//   console.log("INC",this)
//   this.age += 1 // user1.age += 1 or user2.age +=1 depend on CONTEXT
// }

// function decrease() {
//   console.log("DEC",this)
//   this.age -= 1
// }

// const user1 = {
//   name:"John",
//   age: 12,
//   increase,
//   decrease
// }

// const user2 = {
//   name:"Susy",
//   age: 32,
//   increase,
//   decrease
// }

// user1.increase()
// console.log(user1)

// user2.decrease()
// console.log(user2)

// ################ chap.3.5 SS.2 This in METHOD

// function foo() {
//   console.log(this.bar);
// }
// var bar = "global";
// let obj1 = { bar: "obj1", foo:foo};
// let obj2 = { bar: "obj2", foo:foo};
// let obj3 = { bar: "obj3"}
//  // --------

//  // console.log(window)
//  foo(); // "global"
//  obj1.foo() // 'obj1'
//  obj2.foo() // 'obj2'
//  foo.call(obj3) // 'obj3'

// =================== Chap.4 This in METHOD : ARROW FUNCTION
// var firstName = "John";
// let sayHi = () => console.log(this.firstName);

// // function sayHi () {
// //     return console.log(this.firstName)
// // }

// let user = {
//   firstName: "Ilya",
//   sayHi: sayHi,
// };

// sayHi(); // DECLARATION : John  VS Arrow  : john
// user.sayHi(); // DECLARATION: Ilya   VS  Arrow : John (losing this == losing this)

//####### RECOMMEND : Arrow function use for non-method function

// const obj = {
//   i: 10,
//   b: () => console.log(this.i, this),
//   c() {
//     console.log(this.i, this);
//   },
// };
// obj.b(); // prints undefined, Window { /* … */ } (or the global object)
// obj.c(); // prints 10, Object { /* … */ }

