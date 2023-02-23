const map: Map<string, number> = new Map();
map.set("foo", 1234);

console.log(map.get("foo")); // 1234라고 출력된다
console.log(map.get("bar")); // undefined라고 출력된다