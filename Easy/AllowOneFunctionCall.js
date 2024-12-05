var once = function (fn) {
  let isReturned = false;
  return function (...args) {
    if (!isReturned) {
      isReturned = true;
      return fn(...args);
    }
  };
};
