class PremiumUser extends User {
  rank: number;

  constructor(name: string, age: number, rank: number) {
    super(name, age);
    this.rank = rank;
  }
}

const uhyo = new PremiumUser("uhyo", 26, 3);
console.log(uhyo.name); // "uhyo"가 출력된다
console.log(uhyo.rank); // 3이 출력된다
