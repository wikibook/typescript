function sequence(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}