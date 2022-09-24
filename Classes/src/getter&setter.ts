/*
    getter setter
    - private 프로퍼티느 외부에서 직접 접근할 수 없다
      이때 public 함수인 getter와 setter를 이용하여 프로퍼티에 접근하고 변결할 수 있다
    - getter
      get을 수행하는 함수
    - setter
      set을 수행하는함수

    readonly
    - readonly 프로퍼티는 public이든 private이든 초기화할때만 값을 할당할 수 있다
*/                       

class Info {
    public constructor(private _name: string, private _age: number){}

    // getter
    get name() {
        // 프로퍼티를 get하기 전에 수행할 문장을 작성할 수 있다
        console.log('get');

        // getter를 이용하면 그냥 프로퍼티를 get하지 않고 변형 후 반환할 수 있다
        return this._name + 'Lee';
    }

    // setter
    set name(n: string) {
        console.log('set');
        this._name = n;
    }
}

const info1: Info = new Info('Anana', 10);

// getter
// ()로 호출하는 것이 아닌 프로퍼티를 꺼내오는 것처럼 작성하는 것이 특징
console.log(info1.name); 

// setter
// ()로 호출하는 것이 아닌 프로퍼티에 값을 할장하는 것처럼 작성하는 것이 특징
info1.name = 'Mark'; // set
console.log(info1.name); 


class Info2 {
    // readonly 프로퍼티
    // 프로퍼티를 선언할때 초기화하거나 생성자를 통해 초기화해야 한다
    public readonly name: string = 'Mark';
    // private readonly country: string = 'Korea';
    private readonly country: string;

    public constructor(private _name: string, private _age: number){
        this.country = 'Korea'
    }

    hello() {
        // private프로퍼티는 클래스 내부에서만 사용가능한데 readonly이므로 내부에서도 수정할 수 없다
        // this.country = 'China'
    }
}

const info2: Info2 = new Info2('Anana', 10);

// readonly property는 set할 수 없다
// info2.name = 'Mark'; 