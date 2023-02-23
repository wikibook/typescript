class User {
  static adminUser: User;
  static {
    this.adminUser = new User();
    this.adminUser.#age = 9999;
  }

  #age: number = 0;
  getAge() {
    return this.#age;
  }
  setAge(age: number) {
    if (age < 0 || age > 150) {
      return;
    }
    this.#age = age;
  }
}

console.log(User.adminUser.getAge()); // 9999라고 출력된다