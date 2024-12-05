var fibGenerator = function* (ca) {
  let cur = 0;
  let next = 1;
  while (true) {
    yield cur;
    [cur, next] = [next, cur + next];
  }
};
