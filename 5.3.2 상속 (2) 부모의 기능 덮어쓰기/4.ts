class PremiumUser extends User {
  rank: number;

  constructor(name: string, rank: number) {
    super(name, 100);
    this.rank = rank;
  }
}