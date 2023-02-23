
const users: User[] = [];

const lines = data.split("\n");
for (const line of lines) {
  if (line === "") {
    continue;
  }
  const [name, ageString, premiumUserString] = line.split(",");
  const age = Number(ageString);
  const premiumUser = premiumUserString === "1";

  users.push({
    name,
    age,
    premiumUser
  });
}