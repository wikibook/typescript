function fromKey<T extends string>(key: `user:${T}`): T {
    return key.slice(5) as T;
}

// user는 "uhyo" 타입
const user = fromKey("user:uhyo");
