function getAverage(nums: number[]) {
  if (nums.length === 0) {
    return undefined;
  }
  return sum(nums) / nums.length;
}