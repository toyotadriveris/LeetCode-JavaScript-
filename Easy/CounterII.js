var createCounter = function (init) {
  let ans = init;
  return {
    increment: () => (ans += 1),
    reset: () => (ans = init),
    decrement: () => (ans -= 1),
  };
};
