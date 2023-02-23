function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type Human = {
  name: string;
  age: number;
}

const uhyo: Human = {
  name: "uhyo",
  age: 26
};

// uhyoName은 string 타입
const uhyoName = get(uhyo, "name");
// uhyoAge는 number 타입
const uhyoAge = get(uhyo, "age");
