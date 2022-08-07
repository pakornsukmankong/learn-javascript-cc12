const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const mergeArray = [...nums1, -6, -1, ...nums2];

let result = mergeArray.reduce((acc, curr) => {
  return acc + curr;
});

console.log(mergeArray);
console.log(result);
