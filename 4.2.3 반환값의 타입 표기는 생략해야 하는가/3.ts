function range(min: number, max: number) {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
}

const arr = range(5, 10);
// Type 'void' must have a '[Symbol.iterator]()'
// method that returns an iterator.
for (const value of arr) console.log(value);