var map = function (arr, fn) {
  const newArray = [];
  arr.forEach((element, index) => {
    newArray.push(fn(element, index));
  });
  return newArray;
};
