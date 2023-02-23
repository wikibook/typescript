function fillZero(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// fillZero에는 number[] 타입을 넘길 수 있다
const nums1: number[] = [1, 10, 100];
fillZero(nums1);
console.log(nums1); // [0, 0, 0]이라고 출력된다

// fillZero에 readonly number[] 타입을 넘기면 컴파일 에러
const nums2: readonly number[] = [1, 1, 2, 3, 5, 8];
// 에러: Argument of type 'readonly number[]' is not assignable to parameter of type 'number[]'.
// The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
fillZero(nums2);
