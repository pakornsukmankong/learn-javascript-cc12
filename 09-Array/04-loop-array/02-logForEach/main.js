const names = ['Mike', 'Sid', 'Jack', 'Bill'];

const checkItem = (item,index,array) => {
  console.log(`${index+1}. ${item}`)
}

names.forEach(checkItem)

checkItem