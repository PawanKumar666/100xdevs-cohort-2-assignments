//Prints time in HH:MM:SS format each second

function timeRenderer() {
  setInterval(() => {
    let curTime = new Date();
    console.log(
      curTime.getHours() +
        ":" +
        curTime.getMinutes() +
        ":" +
        curTime.getSeconds()
    );
  }, 1 * 1000);
}

timeRenderer();
