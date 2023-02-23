type Union = "uhyo" | "hyo" | 1 | 2 | 3;
// T는 1 | 2 | 3
type T = Exclude<Union, string>;
