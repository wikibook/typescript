class PremiumUser extends User {
  // 에러: This member cannot have an 'override' modifier because it is not declared in the base class 'User'.
  override rank: number = 1;

  public override isAdult(): boolean {
    return true;
  }
}