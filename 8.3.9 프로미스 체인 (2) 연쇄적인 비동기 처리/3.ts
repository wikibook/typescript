const p1 = readFile("foo.txt", "utf8");
const p3 = p1.then((result) => {
  const p2 = repeat10(result);
  return p2;
})
p3.then((result) => {
  console.log(result);
});