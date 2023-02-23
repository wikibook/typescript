type MyObj = { [key: string]: number };
const obj: MyObj = { foo: 123 };

const num: number = obj.bar;
// undefined라고 출력된다
console.log(num);