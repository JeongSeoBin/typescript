/*
    symbol
    - 고유하고 수정불가능한 값으로 만들어 준다
    - Symbol()함수를 이용하여 primitive 타입의 값을 담아서 symbol타입을 만들어 낼 수 있다
    - 소문자 symbol은 symbol타입을 나타내며 대문자 Symbol은 symbol타입을 만드는 함수이다
    - 접근제어하는데 쓰는 경우가 많다

    * tsconfig.json 파일 수정
    "lib": ["ES2015", "DOM"]
*/

// Symbol()은 고유한 값을 만들어 낸다
console.log(Symbol('foo') === Symbol('foo')); // false


// symbol은 접근 제어하는데 이용한다
const sym = Symbol();

const obj = {
    sym: 'value'
};
obj["sym"]; // 누구나 obj의 sym에 접근할 수 있다

const obj2 = {
    [sym]: 'value',
}
obj2[sym]; // sym으로만 접근이 가능하다