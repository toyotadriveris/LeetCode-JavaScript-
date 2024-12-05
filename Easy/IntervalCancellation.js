var cancellable = function (fn, args, t) {
  fn(...args);
  const bomb = setInterval(() => {
    fn(...args);
  }, t);
  const cancel = function () {
    clearInterval(bomb);
  };

  return cancel;
};
