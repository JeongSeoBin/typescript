/*
    keyof & type lookup system
    컴파일타임에 타입을 정확하게 찾아내는 방식

    keyof 객체
    - 해당 객체의 key들로 union타입을 추출 
*/

interface IPerson {
    name: string;
    age: number;
}

// 객체의 key들의 union타입 출력: name | age
type keys = keyof IPerson;

const person: IPerson = {
    name: 'Mark',
    age: 10
}

// 만약에 key가 name인 경우 리턴타입은 string인데 실제 리턴타입은 string|number이다
// key의 타입과 리턴타입이 관계성을 가진다 -> keyof
// function getProp(obj: IPerson, key: 'name' | 'age'): string | number {
//     return obj[key];
// }

//keyof
// IPerson[keyof IPerson] => IPerson["name" | "age"] => IPerson["name"] | IPerson["age"] => 'string' | 'number'
// 아직 해당 키에 대한 타입이 하나만 지정해서 나오진 않는다 -> generic
// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
//     return obj[key];
// }

// keyof + generic
// T: 객체 K: 객체 키들의 union type
// union타입이 아닌 해당 key의 정확한 타입을 지정할 수 있다
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProp(person, 'name');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// key가 name일때 value타입이 string인데 실제 타입은 string|number이다
// key의 타입과 value타입이 관계성을 가진다
// function setProp(obj: IPerson, key: 'name' | 'age', value: string | number): void {
//     obj[key] = value;
// }

// keyof + generic
function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}
setProp(person,  'name', 'Anana');


