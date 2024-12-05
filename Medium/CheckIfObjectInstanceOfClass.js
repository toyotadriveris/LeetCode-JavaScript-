var checkIfInstanceOf = function (obj, classFunction) {
  console.log(obj.__proto__);
  if (obj === undefined || classFunction === undefined) return false;

  if (obj === null || classFunction === null) return false;

  if (
    obj.__proto__ === classFunction.prototype ||
    obj.__proto__.__proto__ === classFunction.prototype
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(() => {
  class X {}
  class C0 extends Object {}
  class C1 extends C0 {}
  class C2 extends C1 {}
  class C3 extends C2 {}
  class C4 extends C3 {}
  class C5 extends C4 {}
  class C6 extends C5 {}
  class C7 extends C6 {}
  class C8 extends C7 {}
  class C9 extends C8 {}
  return checkIfInstanceOf(new C9(), C0);
});
