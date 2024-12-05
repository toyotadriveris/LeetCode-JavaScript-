var addTwoPromises = async function (promise1, promise2) {
  const x = await promise1;
  const y = await promise2;

  return x + y;
};
