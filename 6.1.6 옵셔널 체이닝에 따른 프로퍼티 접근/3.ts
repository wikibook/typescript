type User = {
  isAdult(): boolean;
}

function checkForAdultUser(user: User | null) {
  if (user?.isAdult()) {
    showSpecialContents(user);
  }
}