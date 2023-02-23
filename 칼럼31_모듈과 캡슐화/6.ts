import { increment, value } from "./counter.js";

increment();
console.log(`카운터의 값은 ${value}입니다`);

// Cannot assign to 'value' because it is an import.
value = 100;
console.log(`카운터의 값은 ${value}입니다`);