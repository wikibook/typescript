class PremiumUser extends User {
  rank: number = 1;

  // 에러: Property 'isAdult' in type 'PremiumUser' is not assignable to the same property in base type 'User'.
  public isAdult(): string {
    return "어른입니다!";
  }
}
