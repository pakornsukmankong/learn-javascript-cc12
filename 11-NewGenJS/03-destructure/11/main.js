let arr = [1, [2, [[[3, 4], 5], 6]]];

const [a, [b, [[[c, d], e], f]]] = arr;

console.log(a, b, c, d, e, f);

const result = {
  a,
  b,
  c,
  d,
  e,
  f,
};

console.log(result);
