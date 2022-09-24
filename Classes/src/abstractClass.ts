/*
    Abstract Class
    - 완전하지 않은 클래스
    - new 키워드를 통해 객체를 생성할 수 없다
    - 상속을 통해 완성해야 한다

    Abstract method
    - 구현부가 없다
    - abstact 클래스 내에서만 존재한다
*/

abstract class AbstractPerson {
    protected _name: string = 'Mark';
    abstract setName(name: string): void;
}

class ChildPerson extends AbstractPerson {
    // 추상 클래스를 상속받은 클래스는 반드시 추상 메서드를 오버라이드 해야한다
    setName(name: string): void {
        this._name = name;
    }
}

const childPerson  = new ChildPerson();
childPerson.setName('Anana');