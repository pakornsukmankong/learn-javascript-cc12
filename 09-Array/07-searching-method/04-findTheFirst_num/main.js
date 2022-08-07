const nums = [7, 9, -5, -1, 0, 3];

nums.find((item)=> {
if (item < 0) {
    console.log(item)
    return item
  }
})

// nums.find((el) => el < 0)

