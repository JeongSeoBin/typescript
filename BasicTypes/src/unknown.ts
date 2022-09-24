/*
    unknown
    - any보다 type-safe 타입
    - any와 같이 아무거나 할당할 수 있다
    - 컴파일러가 타입을 추론할 수 있게끔 type guard를 통해서 type을 한정해줘야만 에러가 발생하지 않는다
      * typeguard: 런타임에 검사하여 타입을 한정하는 기능
    - unknown타입을 사용하면 런타임 에러를 줄일 수 있다
    - 사용 전에 데이터의 일부 유형 검사를 수행해야 함을 알리는 api에 사용할 수 있다
*/

declare const maybe: unknown;

// type guard: type을 한정
if (maybe === true) {
    // typeguard를 통해 타입을 지정하여 에러막음
    // any였다면 에러가 발생하지 않아 막기 어려움
    const aBoolean: boolean = maybe;
    // const aString: string = maybe;
}

// typeof type guard
if(typeof maybe === 'string') {
    const aString: string = maybe;
    // const aBoolean: boolean = maybe;
}