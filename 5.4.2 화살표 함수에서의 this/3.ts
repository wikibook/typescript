  public filterOlder(users: User[]): User[] {
    return users.filter(function(this: User, u) {return u.#age > this.#age });
  }