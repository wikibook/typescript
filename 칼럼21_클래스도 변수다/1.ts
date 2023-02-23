class User {
  name: string = "";
  age: number = 0;
}

// User 클래스가 들어 있는 객체
const obj = {
  cl: User
};

// new obj.cl로 User의 인스턴스를 만들 수 있다
const uhyo = new obj.cl();
console.log(uhyo.age); // 0이 출력된다
