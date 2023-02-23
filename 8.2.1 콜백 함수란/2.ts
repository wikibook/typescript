import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('문자열을 입력해 주세요:', (line) => {
  // 문자열이 입력되면 이 부분이 실행된다
  console.log(`${line}이 입력됐습니다`);
  rl.close();
});
