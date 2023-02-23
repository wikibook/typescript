class A {
  foo = 123;
  bar = this.foo + 100;
}

const obj = new A();
console.log(obj.bar); // 223이 출력된다
