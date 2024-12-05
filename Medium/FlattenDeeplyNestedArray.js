var flat = function (arr, n) {
  let ans = [];

  function flaten(array, depth) {
    array.map(function (el) {
      if (Array.isArray(el) && depth < n) {
        flaten(el, depth + 1);
      } else {
        ans.push(el);
      }
    });
  }
  flaten(arr, 0);
  return ans;
};

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

n = 2;
console.log(flat(arr, n));
