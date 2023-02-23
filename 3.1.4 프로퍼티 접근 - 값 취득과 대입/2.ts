import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const messages = {
    good: "0 이상의 값이 입력됐습니다!",
    bad: "마이너스 값을 입력하지 말아주세요!"
}

rl.question('숫자를 입력해 주세요:', (line) => {
  const num = Number(line);
  console.log(messages[num >= 0 ? "good" : "bad"]);
  rl.close();
});
