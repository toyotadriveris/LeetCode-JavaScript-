var cancellable = function (fn, args, t) {
  const cancel = function () {
    clearTimeout(bomb);
  };
  const bomb = setTimeout(() => {
    fn(...args);
  }, t);
  return cancel;
};
