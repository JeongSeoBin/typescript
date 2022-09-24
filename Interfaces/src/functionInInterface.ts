interface Person4 {
    name: string;
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: 'Mark',
    age: 39,
    hello: function(): void {
        console.log(`안녕하세요 ${this.name}입니다`)
    }
}

const p42: Person4 = {
    name: 'Mark',
    age: 39,
    hello(): void {
        console.log(`안녕하세요 ${this.name}입니다`)
    }

    // 생성자를 제외한 tpyeScript 첫번째 파라미터에는 this객체를 지정할 수 있다
    // hello(this:Person4): void {
    //     console.log(`안녕하세요 ${this.name}입니다`)
    // }
}

const p43: Person4 = {
    name: 'Mark',
    age: 39,
    // 화살표 함수 내 this는 global this를 가리킨다
    // 파라미터에 this객체를 넣어 지정해줄 수도 없다
    // 따라서 프로퍼티를 이용하여 기능을 수행하는 함수를 지정할 경우 화살표 함수는 이용하지 않는다
    hello: (): void => {
        // console.log(`안녕하세요 ${this.name}입니다`)
    }
}

p41.hello();
p42.hello();