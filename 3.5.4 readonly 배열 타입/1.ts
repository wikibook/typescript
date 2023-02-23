const arr: readonly number[] = [1, 10, 100];

// 에러: Index signature in type 'readonly number[]' only permits reading.
arr[1] = -500;