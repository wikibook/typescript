// 환경변수 SECRET을 가져온다. 해당 변수가 존재하지 않는다면 "default"를 사용한다
const secret = process.env.SECRET ?? "default";

console.log(`secret는${secret}입니다`);
