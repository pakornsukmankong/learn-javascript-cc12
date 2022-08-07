let arr = ['React', 'Vue', 'Angular'];

const copySorted = (arr) => {
  const clone = [...arr]

  return clone.sort()
}

let sorted = copySorted(arr);
console.log(sorted)
// console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)