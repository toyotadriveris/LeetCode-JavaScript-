var makeFancyString = function (s) {
  return s.replace(/(.)\1{2,}/g, "$1$1");
};
