/*
    함수의 타입만 선언하는 방법
    1. type alias
    2. interface

*/

//type alias
type helloFunctionGeneric1 = <T>(message: T) => T

const helloFunction1: helloFunctionGeneric1 = <T>(message: T): T => {
    return message;
}

// interface
interface helloFunctionGeneric2 {
    <T>(message: T): T
}

const helloFunction2: helloFunctionGeneric2 = <T>(message: T): T => {
    return message;
}