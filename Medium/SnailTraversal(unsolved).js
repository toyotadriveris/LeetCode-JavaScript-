Array.prototype.snail = function (rowsCount, colsCount) {
  const n = this.length;
  if (n === 0) return [];
  if (rowsCount * colsCount !== n) return;

  return result;
};

const arr = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
const rowsCount = 5;
const colsCount = 4;

console.log(arr.snail(rowsCount, colsCount));
