type User = {
  name: string;
  age: number;
  premiumUser: boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

// 여기에 코드를 추가한다

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})는 프리미엄 사용자입니다.`);
  } else {
    console.log(`${user.name} (${user.age})는 프리미엄 사용자가 아닙니다.`);
  }
}
