/*
    # Interfaces 란
    - type을 만들어 내는 방식
    - 여러가지 요구사항에 따라 다양한 형태의 타입을 규명할 수 있다

    # Interface와 type alias
    type alias: 특정 type을 부른다
    interface: 새로운 타입을 만든다
*/

interface Person1 {name: string, age: number}

// function hello1(person: {name: string, age: number}): void {
function hello1(person: Person1): void {
    console.log(`안녕하세요. ${person.name}입니다`);
}

// const p1: {name: string, age: number} = {
//     name: 'Mark',
//     age: 34
// }
const p1: Person1 = {
    name: 'Mark',
    age: 34
}

hello1(p1);

///////////////////////////////// interface와 type alias 비교 ////////////////////////////////
// function type
type EatType  = (food: string) => void;

interface IEat {
    (food: string): void
}

// array type
type PersonList = string[];

interface IPersonList {
    // indexable type
    [index: number]: string
}

// intersection
// 두가지 타입을 하나의 타입으로 정의 할때
// - typealias: '&'
// - interface: extends
interface ErrorHandling {
    success: boolean;
    error?: {message: string}
}
interface ArtistData {
    artists: {name: string}[]
}

type ArtistsResponseType = ArtistData & ErrorHandling;
interface IArtistResponse extends ArtistData, ErrorHandling {}

let art: ArtistsResponseType;
let iart: IArtistResponse

// union type
interface Bird {
    fly(): void;
    layEggs(): void;
}
interface Fish {
    swim(): void;
    layEggs(): void
}

type PetType = Bird | Fish;

// error
// interface IPet extends PetType {}
// class Pet implements PetType {}

// declaration merging (interface 만)
// 같은 이름의 인터페이스를 여러개 만들고 이 이름으로 사용하면 해당 인터페이스들이 merge된다
// 기존거에 추가하여 사용할때 유용하다
interface MergingInterface {
    a: string;
}

interface MergingInterface {
    b: string
}

let mi: MergingInterface = {
    a: 'apple',
    b: 'banana'
};