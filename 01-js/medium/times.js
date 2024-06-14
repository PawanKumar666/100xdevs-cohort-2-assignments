/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  let res = 0;
  const startTime = new Date().getTime();
  // res = (input * (input + 1)) / 2;
  for (let i = 0; i < n; i++) {
    res += i;
  }
  const endTime = new Date().getTime();
  console.log(`Start time ${startTime}. End Time: ${endTime}`);
  time_taken = endTime - startTime;
  console.log("Time taken in seconds:" + time_taken / 1000);
  return res;
}

inputs = [100, 100000, 100000000, 1000000000];
for (input in inputs) {
  console.log(
    `Sum from 1 to ${inputs[input]} is: ` + calculateTime(inputs[input])
  );
}
