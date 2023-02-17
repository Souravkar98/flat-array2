const a = [0, [1, 2], [3, 4], [5, 6, [7, 8]], [10, 11, 12, 13, 14]];
function flatArr(arr, depth) {
  const res = [];
  arr.map((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      res.push(...flatArr(ar, depth - 1));
    } else res.push(ar);
  });
  return res;
}
console.log(flatArr(a, 2));
