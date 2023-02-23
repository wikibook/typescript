const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  })
};

sleep(3000).then(() => {
  console.log('3초가 지났습니다');
});
