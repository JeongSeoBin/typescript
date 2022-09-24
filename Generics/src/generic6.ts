/*
    generic with extends
    T의 타입을 제한 해주는 역할
*/

// <T extends string | number> : T는 string과 number만 가능
class PersonExtends<T extends string | number> {
    private _name: T;

    constructor(name: T){
        this._name = name;
    }
}

new PersonExtends("Mark");
new PersonExtends(10);