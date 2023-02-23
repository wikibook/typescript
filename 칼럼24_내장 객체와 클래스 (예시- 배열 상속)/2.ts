class RepeatArray<T> extends Array<T> {
  repeat(times: number): RepeatArray<T> {
    const result = new RepeatArray<T>();
    for (let i = 0; i < times; i++) {
      result.push(...this);
    }
    return result;
  }
}

// [1, 2]에 해당하는 RepeatArray를 만든다
const arr = new RepeatArray(1, 2);
// push를 사용해 [1, 2, 3]으로 만든다
arr.push(3);
// arr.repeat(3)은 [1, 2, 3, 1, 2, 3, 1, 2, 3]에 해당하는 RepeatArray
const repeated = arr.repeat(3);

// RepeatArray(9) [1, 2, 3, 1, 2, 3, 1, 2, 3]라고 출력된다
console.log(repeated);
