import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('숫자를 입력해 주세요:', (line) => {
  const num = Number(line);
  if (0 <= num && num < 100) {
    console.log(`${num}은 0 이상 100 미만입니다`)
  } else {
    console.log(`${num}은 0 이상 100 미만이 아닙니다`)
  }
  rl.close();
});
