const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  })
};

const p = readFile("foo.txt", "utf8")
  .then(() => sleepReject(1000))
  .then((result) => {
    console.log(result);
  }, () => {
    console.log("실패했습니다");
  });
