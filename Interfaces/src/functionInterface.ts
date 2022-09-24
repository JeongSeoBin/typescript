interface HelloPerson {
    (name: string, age?: number): void;
}

// helloPerson은 HelloPerson타입이기 때문에 파라미터로 age를 받아서 구현해도 되고 파라미터로 age안받아도 된다
const helloPerson: HelloPerson = function(name: string) {
    console.log(`안녕 ${name}`)
}

// helloPerson은 HelloPerson 타입이기 때문에 age를 전달해도 되고 안해도 된다
// 구현부의 파라미터와는 상관없다
helloPerson("Mark");
helloPerson("Mark", 39)