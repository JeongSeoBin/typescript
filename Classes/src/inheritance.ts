/*
    상속
    - 다른 클래스를 상속받으면 해당 클래스에서 기능 추가하거나 덮어쓸 수 있다
    
*/

class Parent {
    constructor(protected _name: string, private _age: number){}

    public print(): void {
        console.log(`이름 ${this._name} 나이 ${this._age}입니다`)
    }

    protected printName(): void {
        console.log(this._name);
    }
}

class Child extends Parent {
    // 부모 property 오버라이드
    // 이때 접근제어자도 변경할 수 있다
    public _name = 'Mark';

    // 생성자 오버라이드
    // 자식 클래스에서 생성자를 직접 작성할 경우 생성자 내 첫번째 줄에 super를 통해 부모 생성자를 호출해야한다
    constructor(age: number) {
        // 부모의 생성자를 호출하지 않고 어떤 값에 접근하면 초기화되지 않은 값에 접근하게 된다
        // 따라서 항상 super()구문이 맨 첫줄에 나와야 한다
        // this.printName();
        super('Json', age);
        // 자식 클래스에서는 protected에 접근할 수 있다
        this.printName();
    }

    // 부모 클래스에 없는 내용 추가
    public gender = 'male'
}

const p = new Parent('Mark', 60);
// protected property는 외부에서 접근이 불가능
// p._name;
p.print();

// 자식 생성자를 직접 작성하지 않은 경우 부모 생성자를 호출한다
// 부모 클래스에도 직접 작성한 생성자가 없을 경우 부모의 기본 생성자를 호출한다
// const c = new Child('Anana', 20);

// 자식 생성자를 직접 작성 한 경우 해당 생성자를 호출해야 한다
const c = new Child(20);
c.print();
c._name;
c.gender;


