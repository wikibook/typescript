// 20세 이상인 사용자만 존재하는 배열
const adultUsers = users.filter((user: User) => user.age >= 20);
// 모든 사용자가 20세 이상이라면 true
const allAdult = users.every((user: User) => user.age >= 20);
// 60세 이상인 사용자가 한 명이라도 있다면 true
const seniorExists = users.some((user: User) => user.age >= 60);
// 이름이 John으로 시작하는 사용자를 찾아서 반환한다
const john = users.find((user: User) => user.name.startsWith("John"));
