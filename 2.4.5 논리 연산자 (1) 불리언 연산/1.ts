const t = true, f = false;

console.log(t && t); // true라고 출력된다
console.log(t && f); // false라고 출력된다
console.log(f && f); // false라고 출력된다

console.log(t || t); // true라고 출력된다
console.log(t || f); // true라고 출력된다
console.log(f || f); // false라고 출력된다