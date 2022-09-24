/*
    Generic과 Any의 다른 점
*/

// 로직이 중복되는 함수
// -> 모든 타입을 받고 리턴하는 하나의 함수를 작성 : any
function helloString(message: string): string {
    return message
}

function helloNumber(message: number): number {
    return message;
}

// any
function hello(message: any): any {
    return message;
}
// 문제점: 리턴 타입이 any이기 때문에 숫자형에 문자열 함수를 쓸 수 있고 length의 타입추론도 any가 나온다
// -> 타입을 변수로 활용하고 리턴타입에 연관을 줄 수 있으면 좋겠다 : generic
console.log(hello('string').length);
console.log(hello(1).length);

// generic
// T로 내부타입을 받고 이를 함수 내부에서 사용
function helloGeneric<T>(message: T): T {
    return message;
}

// helloGeneric<"Mark">(message: "Mark"): "Mark"
console.log(helloGeneric('Mark').length);
// helloGeneric<39>(message: 39): 39
console.log(helloGeneric(39));
// helloGeneric<true>(message: true): true
console.log(helloGeneric(true))