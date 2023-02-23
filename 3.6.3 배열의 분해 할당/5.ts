const arr = [1, 2, 4, 8, 16, 32];

const [, foo, , bar, , baz] = arr;
console.log(foo); // 2가 출력된다
console.log(bar); // 8이 출력된다
console.log(baz); // 32가 출력된다
