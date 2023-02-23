
const users: User[] = data.split("\n")
  .filter(line => line !== "")
  .map(line => {
    const [name, ageString, premiumUserString] = line.split(",");

    return {
      name,
      age: Number(ageString),
      premiumUser: premiumUserString === "1"
    };
  });