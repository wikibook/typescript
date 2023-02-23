// 기존의 사용 방법
type S = Family<string, string>;
// T는 Family<Animal, Animal>과 같다
type T = Family;
// U는 Family<string, Animal>과 같다
type U = Family<string>;
