let array = [29, 17, 13, 47, 23, 31];
let x = 0;

let sum = (item,index,array) => {
  x += item
}

array.forEach(sum);

console.log(x)