function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
  if (users.every(user => user.tag === "human")) {
    return (<Human[]>users).map(user => user.name);
  }
  return undefined;
}