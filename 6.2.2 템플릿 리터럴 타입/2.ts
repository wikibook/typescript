function makeKey<T extends string>(userName: T) {
    return `user:${userName}` as const;
}

const uhyoKey: "user:uhyo" = makeKey("uhyo");