var isEmpty = function (obj) {
  if (typeof obj === "object") {
    return Object.keys(obj).length === 0 ? true : false;
  } else {
    return obj.length === 0 ? true : false;
  }
};
