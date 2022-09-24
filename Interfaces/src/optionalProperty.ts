/*
    # optional property
    항상 필요한 property가 아닌 상황에 따라 선택할 수 있는 property
    프로퍼티?
*/ 

interface Person2 {
    name: string;
    age?: number; // optional property
}

function hello2(person: Person2): void {
    console.log(`안녕하세요 ${person.name}입니다`);
}

// age는 optional property이기 때문에 선택적으로 넣을 수 있다
hello2({name: 'Mark', age: 80})
hello2({name: 'Anana'})