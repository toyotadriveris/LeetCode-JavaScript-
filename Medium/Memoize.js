let entries = [];
let results = [];
function memoize(fn) {
  const cache = {};
  const st = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    const x = st.has(key);
    st.set(key);
    if (x) {
      return cache[key];
    } else {
      return (cache[key] = fn(...args));
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 4));
console.log(memoizedFn(2, 4));

console.log(memoizedFn(2, 4));

console.log(entries);
console.log(callCount); // 1
