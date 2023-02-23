import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('이름을 입력해 주세요:', (name) => {
  const displayName = name || "이름 없음";
  console.log(`안녕하세요, ${displayName}님`);
  rl.close();
});