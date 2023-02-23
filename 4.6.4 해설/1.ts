function map(array: number[], callback: (value: number) => number): number[] {
  const result: number[] = [];
  for (const elm of array) {
    result.push(callback(elm));
  }
  return result;
}