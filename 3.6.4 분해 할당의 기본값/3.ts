const obj = { foo: null };

const { foo = 123 } = obj;
console.log(foo); // null이 출력된다
