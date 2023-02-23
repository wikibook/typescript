async function get3(): Promise<number> {
  return 3;
}

const p = get3();
p.then(num => {
  console.log(`num is ${num}`);
});