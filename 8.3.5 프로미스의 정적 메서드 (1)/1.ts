const p = Promise.resolve(100);

p.then((result) => {
  console.log(`result is ${result}`);
});