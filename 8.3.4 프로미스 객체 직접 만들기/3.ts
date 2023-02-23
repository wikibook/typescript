const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  })
};

sleepReject(3000).catch(() => {
  console.log('실패!!!!');
});