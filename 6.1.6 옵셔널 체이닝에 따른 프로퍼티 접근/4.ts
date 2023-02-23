type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
  // timeOrUndefined는 string | undefined 타입
  const timeStringOrUndefined = getTimeFunc?.().toString();
}
