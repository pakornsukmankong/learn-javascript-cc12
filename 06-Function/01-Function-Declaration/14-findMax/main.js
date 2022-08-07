function max() {
  let ans = arguments[0]
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > ans) {
      ans = arguments[i]
    }
    else if (typeof arguments[i] !== 'number') {
      return NaN
    } else if (arguments.length > 4) {
      return ("maximum argument is 4")
    }
  }
  return ans
}