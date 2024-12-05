var expect = function (val) {
  return {
    toBe: (s) => {
      if (val === s) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (s) => {
      if (val !== s) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
