  public filterOlder(users: User[]): User[] {
    const _this = this;
    return users.filter(function(u) {return u.#age > _this.#age });
  }