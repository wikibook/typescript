function getAverage(nums: number[]) {
  if (nums.length === 0) {
    throw new Error("배열이 비어 있습니다");
  }
  return sum(nums) / nums.length;
}
