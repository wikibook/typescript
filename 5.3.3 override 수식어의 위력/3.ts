// noImplicitOverride 옵션이 켜져 있으면 컴파일 에러 발생
class PremiumUser extends User {
  rank: number = 1;

  // 에러: This member must have an 'override' modifier because it overrides a member in the base class 'User'.
  public isAdult(): boolean {
    return true;
  }
}
