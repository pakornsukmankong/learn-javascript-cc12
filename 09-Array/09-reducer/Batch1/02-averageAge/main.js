let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

const getAverageAge = (array) => {

  let sumAge = array.reduce((acc,item)=>{  // item == {name : 'john' , age: 27}
    let age = item.age
    return acc + age
  },0)

  let averageAge = sumAge / array.length
  return averageAge.toFixed(2)
}


console.log(getAverageAge(arr));