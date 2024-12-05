Array.prototype.groupBy = function (fn) {
  let index = 0;
  let answer = {};
  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    if (!answer.hasOwnProperty(key)) {
      answer[key] = [this[i]];
    } else {
      answer[key].push(this[i]);
    }
  }

  return answer;
};

fn = function (item) {
  return item.id;
};

let array = [{ id: "1" }, { id: "1" }, { id: "2" }];
console.log(array.groupBy(fn));
