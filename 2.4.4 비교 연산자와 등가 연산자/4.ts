import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('비밀번호를 입력해 주세요:', (password) => {
  if (password === 'hogehoge') {
    console.log('어서오세요!');
  } else {
    console.log('누구세요？');
  }
  rl.close();
});
