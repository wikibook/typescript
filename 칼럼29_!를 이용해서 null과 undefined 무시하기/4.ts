function showOneUserName(user1?: Human, user2?: Human): string | undefined {
  return user1?.name ?? user2?.name;
}