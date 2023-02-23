const obj1 = {
  foo: 123,
  bar: 456,
  baz: 789
};

const obj2 = {
  ...obj1,
  foo: -9999,
};

// obj2는 { foo: -9999, bar: 456, baz: 789 }
console.log(obj2);
