const commandList = ["attack", "defend", "run"] as const;

// "attack" | "defend" | "run" 타입
type Command = typeof commandList[number];
