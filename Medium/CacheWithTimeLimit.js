// create a map
// how can i check if a set already exists?
// i can call timeouts in objects and also keep a reference
// how can i say if an object already exist clean the previous timeout?

var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const exists = this.cache.has(key);
  if (exists) clearTimeout(this.cache.get(key).t);
  this.cache.set(key, {
    value: value,
    t: setTimeout(() => {
      this.cache.delete(key);
    }, duration),
  });
  return exists;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) return this.cache.get(key).value;
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

const timeLimitedCache = new TimeLimitedCache();

console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count());
