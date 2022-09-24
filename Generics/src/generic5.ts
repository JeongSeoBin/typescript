/*
    generic class
*/

class PersonGeneric<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K){
        this._name = name;
        this._age = age
    }
}

// generic 타입 추론
new PersonGeneric('Mark', 10);
// generic 타입 지정
new PersonGeneric<string, number>('Mark', 10);