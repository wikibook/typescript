const arr = [1, 1, 2, 3, 5, 8, 13];

const [first, second, third, ...rest] = arr;
console.log(first); // 1이 출력된다
console.log(second); // 1이 출력된다
console.log(third); // 2가 출력된다
console.log(rest); // [3, 5, 8, 13]이 출력된다
