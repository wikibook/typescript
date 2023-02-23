class A {
  static foo = 123;
  static bar = this.foo * 2;
  static {
    console.log("bar is", this.bar); // "bar is 246"이 출력된다
  }
}
