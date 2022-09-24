/*
    never
    - 끝까지 수행하지 않는 함수의 return 타입 지정할때 사용한다
    - 모든 타입의 서브타입, 모든 타입에 할당할 수 있다
    - never에는 어떤 것도 할당할 수 없으며 any조차도 never에게 할당할 수 없다
    - 잘못된 타입을 넣는 실수를 막고자 할때 사용하기도 한다
*/

// 아무것도 리턴하지 않는 함수에서 리턴타입으로 never를 사용한다
function error(msg: string): never{
    throw new Error(msg);
}

function fail(): never {
    return error('failed');
}

function infiniteLoop(): never{
    while(true){}
}

/////////////////////////////////////////////////////////////////////////

declare const aNever: never;
// never는 모든 타입의 서브타입이다
const str: string = aNever;

// never에는 어떤 것도 할당할 수 없으며 any조차도 never에게 할당할 수 없다
const aAny: any = 'any';
// const otherNever: never = aAny

/////////////////////////////////////////////////////////////////////////

declare const a: string;

if(typeof a !== 'string') {
    // a가 never로 간주될때 a에 아무것도 실행하지 않도록 코드를 작성할 수 있다
    a;
}

// 잘못된 타입을 넣는 실수를 막고자 할때 사용하기도 한다
type Indexable<T> = T extends string ? T & {[index: string]: any} : never; 
type objectIndexable = Indexable<{}>; // string이 아닌 타입을 넣어서 never가 리턴되었다