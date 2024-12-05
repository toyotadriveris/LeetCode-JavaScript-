let timeLimit = function (fn, t) {
  return async function (...args) {
    let timerId;
    let timeout;
    const timePromise = new Promise((res, rej) => {
      timerId = setTimeout(() => {
        res(fn(...args));
      });
    });
    const failedPromise = new Promise((res, rej) => {
      timeout = setTimeout(() => {
        res("Time Limit Exceeded");
      }, t);
    });
    clearTimeout(timerId);
    clearTimeout(timeout);
    const res = await Promise.race([timePromise, failedPromise]);
    return res;
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
