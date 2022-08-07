const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
const answer1 = array1.map((item) => item * 2)
console.log(answer1)

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
const answer2 = array2.map((item) => String(item))
console.log(answer2)

const array3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
const answer3 = array3.map((item) => typeof item)
console.log(answer3)

const array4 = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
const answer4 = array4.map((item) => item.toLocaleUpperCase())
console.log(answer4)

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const answer5 = array5.map((item)=> {
  if (item % 2 === 0){
    return "even"
  } else {
    return "odd"
  }
})
console.log(answer5)

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
const answer6 = array6.map((item)=> Math.abs(item))
console.log(answer6)

const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
const answer7 = array7.map((item) => item.toFixed(2))
console.log(answer7)

const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const MONTH = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const answer8 = array8.map(index=> MONTH[index])

console.log(answer8)

const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
const answer9 = array9.map(item => item ** (1/4))
console.log(answer9)

const array10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: ["apple", "banana", "watermelon"]
const answer10 = array10.map(item => item.name)
console.log(answer10)

const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]
const answer11 = array11.map(item => item.age)
console.log(answer11)

const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
const CURRENT_YEAR = '2021'
const answer13 = array13.map(item => {
  let age = CURRENT_YEAR - item.birth.slice(0,4)

  return {...item,age}
})
console.log(answer13)


const array14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
const display = array14.map((item) => {
  let name = item.name
  let date = item.birth.slice(-2)
  let month = item.birth.slice(5,7)
  let monthName = MONTH[month-1].toLowerCase()
  let year = item.birth.slice(0,4)


  return `<tr><td>${name}</td><td>${date} ${monthName} ${year}</td></tr>`
})

console.log(display)