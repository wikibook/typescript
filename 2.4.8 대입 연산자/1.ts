import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('이름을 입력해 주세요:', (name) => {
  if (name === '') {
    name = '이름 없음';
  }
  console.log(`안녕하세요, ${name}님`);
  rl.close();
});