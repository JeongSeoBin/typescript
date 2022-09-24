/*
    tuple
    - [type, type]
    - 서로 다른 타입의 데이터를 배열 형태로 묶을 수 있다
    - 각 인덱스의 타입을 지정할 수 있다
    - 길이가 정해져 있다
*/

let x: [string, number];
x = ["hello", 10];

// 순서
// 타입에 지정한 타입순서에 맞춰야한다
//x = [10, "Mark"];

// 길이
// 인덱스 2부터는 undefined
// undefined 타입에 문자열을 할당하므로 에러
// x[2] = "word";

// 구조 분해 할당
const person: [string, number] = ['Mark', 20];
const [first, second] = person;