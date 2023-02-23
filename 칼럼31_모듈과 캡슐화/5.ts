import { increment, value } from "./counter.js";

increment();
console.log(`카운터의 값은 ${value}입니다`); // "카운터의 값은 입니다"라고 출력된다
increment();
console.log(`카운터의 값은 ${value}입니다`); // "카운터의 값은 2입니다"라고 출력된다
increment();
console.log(`카운터의 값은 ${value}입니다`); // "카운터의 값은 3입니다"라고 출력된다