function toSeconds(hours: number, minutes: number, seconds: number): number {
  return; // ← 이 세미콜론이 생략된 것으로 처리된다
      hours * 3600
      + minutes * 60
      + seconds;
}
