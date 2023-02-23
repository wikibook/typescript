const arr = [0, 123, -456 * 100];
// 여기는 OK
arr[1] = 5400;
// 여기는 에러
// 에러: Cannot assign to 'arr' because it is a constant.
arr = [1, 2, 345, 67];