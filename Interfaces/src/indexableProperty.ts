/*
    # indexable propery
    어떠한 property든 새로 추가로 지정할 수 있는 property
    [index: string]: type
*/

interface Person3 {
    name: string;
    age?: number;
    [index: string]: any; 
}

function hello3(person: Person3): void {
    console.log(`안녕하세요 ${person.name}입니다`)
}

const p31: Person3 = {
    name: 'Mark',
    age: 39,
}

const p32: Person3 = {
    name: 'Anana',
    // 어떠한 propert든 추가할 수있다
    systers: ['Sung', 'Chan'],
} 

const p33: Person3 = {
    name: 'Bokdaengi',
    // 어떠한 propert든 추가할 수있다
    father: p31,
    mother: p32
}

hello3(p33);