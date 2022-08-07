let user = {
  name: 'john',
  age: 30
}
// let clone = {}

// for (let key in user) {
//   clone[key] = user[key]
// }

// console.log(clone === user)

const clone = Object.assign({},user)
console.log(clone)