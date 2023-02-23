function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

const arr = range(5, 10);
for (const value of arr) console.log(value);