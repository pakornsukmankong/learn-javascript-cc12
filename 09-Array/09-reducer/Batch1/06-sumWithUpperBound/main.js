let str = '31 45 12 67 34 86 23 37 19 41';

let strArray = str.split(' ')
console.log(strArray)

let result = strArray.reduce((acc,item)=>{
  if (item < 40) {
    acc += +item
  }else {
    null
  }
  return acc 
},0)

console.log(result)