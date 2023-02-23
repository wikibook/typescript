  public filterOlder(users: User[]): User[] {
    // 에러: 'this' implicitly has type 'any' because it does not have a type annotation.
    return users.filter(function(u) {return u.#age > this.#age });
  }