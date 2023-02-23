for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i); // 2, 4, 6, ..., 100이 출력된다
}
