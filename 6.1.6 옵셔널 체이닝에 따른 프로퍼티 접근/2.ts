type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
  // timeOrUndefined는 Date | undefined 타입
  const timeOrUndefined = getTimeFunc?.();
}
