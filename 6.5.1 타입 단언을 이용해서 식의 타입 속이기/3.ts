function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
  if (users.every(user => user.tag === "human")) {
    return (users as Human[]).map(user => user.name);
  }
  return undefined;
}