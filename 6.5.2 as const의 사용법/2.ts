const names = ["uhyo", "John", "Taro"] as const;
// type Name = "uhyo" | "John" | "Taro"
type Name = (typeof names)[number];