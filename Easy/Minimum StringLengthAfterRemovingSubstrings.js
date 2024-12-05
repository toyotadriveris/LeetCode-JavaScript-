var minLength = function (s) {
  let str = s;
  while (/(AB|CD)/.test(str)) {
    str = str.replace(/AB|CD/g, "");
  }
  return str.length;
};
