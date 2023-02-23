function doubleOption(obj: Option<number>) {
  return mapOption(obj, x => x * 2);
}
const four: Option<number> = { tag: "some", value: 4 };
const nothing: Option<number> = { tag: "none" };

console.log(doubleOption(four)); // { tag: "some", value: 8 }
console.log(doubleOption(nothing)); // { tag: "none" }