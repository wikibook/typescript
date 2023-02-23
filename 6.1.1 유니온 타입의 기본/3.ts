function getName(user: User): string {
  // 에러: Property 'name' does not exist on type 'User'.
  // Property 'name' does not exist on type 'Animal'.
  return user.name;
}