/*
    void
    - 값은 없고 타입만 존재
    - 값을 반환하지 않거나 undefined를 리턴할때 리턴타입으로 쓰인다
    - 함수의 리턴값을 가지고 어떤 행위도 하지 않을 것이라는 것을 명시하기 위함
    - void에는 undefined만 할당할 수 있다

    undefined와 void의 차이점
    - void가지고 어떠한 일도 할 수 없다
*/

function returnVoid(message: string) {
    console.log(message);

    return
    // 리턴 타입이 void인 함수에서 유일하게 리턴할 수 있는 값은 undefined
    // return undefined
}

// void를 리턴하는 함수를 변수로 받는 일조차 할 수 없다
// const r: undefined = returnVoid('리턴이 없다')
returnVoid('리턴이 없다')