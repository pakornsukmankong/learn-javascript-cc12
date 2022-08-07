// !n
// !4 = 1 * 2 * 3 * 4
// !5 = 5 * 4 * 3 * 2 * 1

const calFactiorial = (num) => {
  let result = 1

  for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
}