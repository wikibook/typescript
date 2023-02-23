async function fail() {
  throw new Error("Oh my god!!!!");
}

const p = fail();
p.catch(err => {
  console.log(err);
});