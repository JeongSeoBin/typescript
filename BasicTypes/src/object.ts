/*
    object
    - non-primitive type
      "primitive 타입이 아닌 것"을 나타내고 싶을때 사용하는 타입
       not number, string, boolean, null, symbol, undefined
*/

// create by object literal
// person1 is not "object" type
// person1 is "{name: string, age: number}" type
const person1 = {name: 'Mark', age: 40};

// create by Object.create
// Object: 내장 전역 객체, 런타임에 제공되는 객체
// 인자 안에는 object타입 혹은 null이 들어가야하는데 (object | null 인 union 타입)
// 여기서 object타입이라는 것은 primitive타입이 아닌 것을 의미한다
const person2 = Object.create({name: 'Mark', age: 30});

let object: object = {};
object = {name: "Mark"};
object = [{name: "Mark"}];
// error
// object = 39;
// object = 'Mark';
// object = true;
// object = Symbol();
// object = null;
// object = undefined;
