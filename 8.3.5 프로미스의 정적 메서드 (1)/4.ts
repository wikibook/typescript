const p = Promise.resolve();

p.then(() => {
  console.log("2");
});
console.log("1");