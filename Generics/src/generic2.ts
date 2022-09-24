/*
    gereric 사용
    - gereric타입을 지정할 수도 있고 지정하지 않으면 gereric타입이 추론된다
    - gereric 타입은 여러개 정의하고 지정하여 사용할 수 있다
*/

function helloBasic<T>(message: T): T {
    return message;
}

// generic 타입을 직접 지정
helloBasic<string>('Mark');

// 전달한 값에 의헤서 generic 타입을 추론
// helloBasic<36>(message: 36): 36
helloBasic(36);

// generic type은 여러개 지정할 수 있다
function helloBasic2<T, U>(message: T, comment: U) {
    return message;
}

helloBasic2<string, number>('hello', 10);