let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

const result = alphabets.reduce((acc,char) => {
  if (!acc.includes(char)) {
    acc.push(char)
  }
  return acc
},[])

console.log(result)