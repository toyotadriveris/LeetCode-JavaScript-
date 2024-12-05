var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((x, functions) => {
      return functions(x);
    }, x);
  };
};
