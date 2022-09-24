/*
    타입 별칭(Type Alias)
    - 타입에 이름을 붙이는 것
    - type 타입이름 = 타입
    - Primitive, Union Type, Tuple, Function, 직접 작성해야하는 타입을 다른이름으로 부를 수 있다
    - 만들어진 타입을 refer하는 것. 타입을 만드는 것은 아니다

    alias와 interface 사용 기준
    - type으로서 목적이 명확하고 존재가치가 있는 경우 interface
    - 다른 대상을 가리킬 뿐 별명으로서만 존재하는 경우 alias
*/

// Aliasing Primitive
type MyStringType = string;

const str = 'world';
let myStr: MyStringType = 'HELLO';
myStr = str; // typescript에서는 구조가 같으면 같은 타입 : strutual typeSystem


// Aliasing Union Type
// 길게 작성해야하는 union타입을 짧게 쓸 수 있다
let person: string | number = 0;
person = 'Mark';

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = 'Anana';


// Aliasing Tuple
// tuple타입에 별칭을 줘서 여러군데 사용할 수 있다
let person2: [string, number] = ['Mark', 10];
type PersonTuple = [string, number];
let anotehr2: PersonTuple = ['Anana', 40];


// Aliafing Function
type EatType = (food: string) => void