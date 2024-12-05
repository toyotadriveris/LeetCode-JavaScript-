var rotateString = function (s, goal) {
  let arr = [];
  let arr2 = [];
  let arr3 = [];

  if (s.length !== goal.length) return false;

  for (let i = 0; i < s.length; i++) {
    arr2.push(s[i]);
    arr3.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    let char = arr2.shift();
    arr3.shift();
    arr3.push(char);

    if (arr3.join("") === goal) {
      arr.push("true");
    }
  }
  if (arr.length !== 0) {
    return true;
  } else {
    return false;
  }
};
