/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function waiter(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Time is up"), n * 1000);
    if (n < 0) {
      reject("Given time is less than zero");
    }
  });
}

async function wait(n) {
  const result = await waiter(n);
  console.log(result);
}

module.exports = wait;
