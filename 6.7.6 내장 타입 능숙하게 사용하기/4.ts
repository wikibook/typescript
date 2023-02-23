type Union = "uhyo" | "hyo" | 1 | 2 | 3;
// T는 "uhyo" | "hyo"
type T = Extract<Union, string>;
