function sum(a, b, callBack) {
  let res = a + b;
  callBack(res);
}

function displayRes(res) {
  console.log("The result is: " + res);
}

sum(2, 3, displayRes);
