// A function whose declared type is neither
// 'void' nor 'any' must return a value.
function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
}

const arr = range(5, 10);
for (const value of arr) console.log(value);