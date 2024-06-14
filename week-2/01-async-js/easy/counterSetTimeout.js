let i = 1;

function incrementCounter() {
  console.log(i++);
  setTimeout(() => {
    incrementCounter();
  }, 1000);
}
