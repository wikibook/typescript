function makeTriple<T>(x: T, y: T, z: T): T[] {
  return [x, y, z];
}

const stringTriple = makeTriple("foo", "bar", "baz");