const obj1 = {
  foo: 123,
  bar: 456,
};

const obj2 = {
  bar: -999,
  baz: -9999,
};

const obj3 = {
  ...obj1,
  ...obj2
};

// obj3은 { foo: 123, bar: -999, baz: -9999 }
console.log(obj3);
