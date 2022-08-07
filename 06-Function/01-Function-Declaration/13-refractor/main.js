// let a = prompt("how old are you")

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// console.log(checkAge(a))

// Answer 1
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } 
//   return confirm("Did you parent allow you?")
// }

// Answer 2
// function checkAge(age) {
//   return (age>18 ? true : confirm("Did parents allow you?"))
// }


// Answer 3
function checkAge(age) {
  return age>18 || confirm("Did you parrent allow you?")
}