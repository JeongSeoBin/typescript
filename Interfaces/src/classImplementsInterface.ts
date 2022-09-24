/*
    객체지향 방식
    외부에는 인터페이스만 노출하고
    해당 인터페이스를 implements한 클래스에서 내부구현을 한다
*/

interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

// 인터페이스를 implements한 클래스는
// - 인터페이스에서 정의한 함수 구현
// - 인터페이스에서 정의한 required property 초기화
class Person implements IPerson1 {
    name: string;
    age?: number | undefined;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`안녕하세요 ${this.name}입니다`);
    }
}

// Person객체는 IPerson1 인터페이스를 구현한 객체이므로 상위 타입인 IPerson1 작성 가능
const person: IPerson1 = new Person('Mark');
person.hello();