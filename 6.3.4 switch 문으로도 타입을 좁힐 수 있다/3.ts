function getUserName2(user: User): string {
  switch (user.tag) {
    case "human":
      return user.name;
    case "animal":
      return "이름 없음";
    case "robot":
      return `CPU ${user.name}`;
  }
}