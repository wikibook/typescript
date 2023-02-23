function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  // 에러: Type 'number' is not assignable to type 'number[]'.
  return max;
}