class A {
  foo = 123;
  bar = this.foo + 100;
  getFoo() {
    return this.foo;
  }
}

const obj = new A();
console.log(obj.bar, obj.getFoo()); // "223 123"이 출력된다
