const str: any = "3";

// true가 출력된다(문자열이 숫자로 변환되기 때문)
console.log(str == 3); 

// false가 출력된다(서로 다른 타입인 문자열과 숫자를 비교했기 때문)
console.log(str === 3);
