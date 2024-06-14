function timeRendererAmPm() {
  setInterval(() => {
    let curTime = new Date();
    console.log(
      curTime.getHours() +
        ":" +
        curTime.getMinutes() +
        ":" +
        curTime.getSeconds() +
        " " +
        (curTime.getHours() % 12 ? "PM" : "AM")
    );
  }, 1 * 1000);
}

timeRendererAmPm();
