import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('명령어를 입력해 주세요: ', (name) => {
  switch (name) {
    case "greet":
      console.log("안녕하세요.");
      break;
    case "cat":
      console.log("당신은 고양이 파인가요？");
      console.log("저는 강아지 파입니다.");
      break;
    default:
      console.log(`명령어 '${name}'를 알아듣지 못했습니다.`)
  }
  rl.close();
});
