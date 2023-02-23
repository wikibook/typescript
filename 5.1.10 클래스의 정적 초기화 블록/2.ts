class User {
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