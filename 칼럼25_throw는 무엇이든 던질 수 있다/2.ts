class EmptyArrayError extends Error {}

try {
  getAverage([1, 2, 3]);
  getAverage([]); // 여기에서 에러 발생
} catch (err) {
  if (err instanceof EmptyArrayError) {
    console.log("EmptyArrayError를 캐치했습니다");
  } else {
    throw err;
  }
}

function getAverage(nums: number[]) {
  if (nums.length === 0) {
    throw new EmptyArrayError("배열이 비어 있습니다");
  }
  return sum(nums) / nums.length;
}

function sum(nums: number[]): number {
  let result = 0;
  for (const num of nums) result += num;
  return result;
}
