var ArrayWrapper = function (nums) {
  this.number = [...nums];
};

ArrayWrapper.prototype.valueOf = function () {
  if (this.number.length === 0) return null;
  return this.number.reduce((a, b) => a + b);
};

ArrayWrapper.prototype.toString = function () {
  if (this.number.length === 0) return `[]`;
  return `[${this.number.toString()}]`;
};
