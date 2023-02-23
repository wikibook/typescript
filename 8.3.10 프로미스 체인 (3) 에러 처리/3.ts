const p = readFile("foo.txt", "utf8")
  .then(() => sleepReject(1000))
  .then((result) => {
    console.log(result);
  });