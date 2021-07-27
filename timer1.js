const intervals = process.argv.slice(2);

intervals.forEach(e => {
  if (Number.isInteger(e) || e >= 0) {
    setTimeout(() => {
      console.log("Beep!");
    }, e * 1000);
  }
});
