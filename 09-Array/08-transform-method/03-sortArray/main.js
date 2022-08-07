const arr = [11, 17, 23, 13, 7, 19];

//MAX --> MIN : MORE --> LESS

const compareFn = (a,b) => {
  if (a<b) {
    return 1
  } else {
    return -1
  }
}

arr.sort(compareFn)

arr.sort((a,b) => a < b ? 1 : -1)