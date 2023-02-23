import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('숫자를 입력해 주세요:', (line) => {
  const num = Number(line);
  // 1000을 더해서 출력
  console.log(num + 1000);
  rl.close();
});
