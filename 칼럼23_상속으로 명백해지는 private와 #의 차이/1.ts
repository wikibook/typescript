class User1 {
  private age = 0;
}
// 에러: Class 'SuperUser1' incorrectly extends base class 'User1'.
//        Types have separate declarations of a private property 'age'.
class SuperUser1 extends User1 {
  private age = 1;
}

class User2 {
  #age = 0;
}
class SuperUser2 extends User2 {
  // 여기는 OK
  #age = 1;
}