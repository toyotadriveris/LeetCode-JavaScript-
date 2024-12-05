var decrypt = function (code, k) {
  let n = code.length;
  if (k === 0) {
    return Array(n).fill(0);
  }

  let ans = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let sum = 0;
    if (k > 0) {
      for (let j = 1; j <= k; j++) {
        sum += code[(i + j) % n];
      }
    } else {
      for (let j = -1; j >= k; j--) {
        sum += code[(i + j + n) % n];
      }
    }
    ans[i] = sum;
  }

  return ans;
};
