const p = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 3000);
});

p.then((num) => {
  console.log(`결과는 ${num}`);
});
