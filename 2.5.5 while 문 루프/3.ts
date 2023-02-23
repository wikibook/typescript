let i = 1;

while (i <= 100) {
  i++;
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}