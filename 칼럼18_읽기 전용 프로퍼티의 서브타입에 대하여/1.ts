function sum(nums: readonly number[]): number {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}

// sum에는 readonly number[] 타입을 넘길 수 있다
const nums1: readonly number[] = [1, 10, 100];
console.log(sum(nums1)); // 111이라고 출력된다
// sum에는 number[] 타입을 넘길 수 있다
const nums2: number[] = [1, 1, 2, 3, 5, 8];
console.log(sum(nums2)); // 20이라고 출력된다
