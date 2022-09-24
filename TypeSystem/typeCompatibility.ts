/*
    타입 호환성(Type Compatibility)

    # 서브 타입과 슈퍼타입
    - 공변
      타입이 같거나 서브타입인 경우 할당이 가능하다
    - 반병
      함수의 매개변수 타입만 같거나 슈퍼타입인 경우 할당이 가능하다
      * strictFunctionTypes 옵션
        함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입이 아닌 경우, 에러를 통해 경고한다

    - typeScript는 기본적으로 공변을 따르는데 함수할당할때 함수의 매개변수 타입이 같은 타입이거나 슈퍼타입인 경우 할당이 가능하다
*/

// sub1 타입은 sup1타입의 서브타입
let sub1: 1 = 1;
let sup1: number = sub1;
// sub1 = sup1; // error: 'number' 형식은 '1' 형식에 할당할 수 없습니다

// sub2타입은 sup2타입의 서브타입
let sub2: number[] = [1];
let sup2: object = sub2;
// sub2 = sup2; // error: '{}' 형식에 'number[]' 형식의 length, pop, push, concat 외 28개 속성이 없습니다.

let sub3: [number, number] = [1,2];
let sup3: number[] = sub3;
// sub3 = sup3; // error: 'number[]' 형식은 '[number, number]' 형식에 할당할 수 없습니다. 대상에 2개 요소가 필요하지만, 소스에 더 적게 있을 수 있습니다.

// sub4타입은 sup4타입의 서브타입
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4; // any에 따른 예외적인 상황

// sub5타입은 sup5타입의 서브타입
let sub5: never = 0 as never; // as: 강제 형변환
let sup5: number = sub5;
// sub5 = sup5; // error: 'number' 형식은 'never' 형식에 할당할 수 없습니다.

class Animal {}
class Dog extends Animal {
    eat() {}
}

// sub6타입은 sup6타입의 서브타입
let sub6: Dog = new Dog();
let sup6: Animal = sub6;
// sub6 = sup6; // error:  Propperty 'eat' is missing in type 'subAnimal' but required in type 'SubDog'


// 공변
let sub7: string = '';
let sup7: string | number = sub7;

// object: 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이면
let sub8: {a: string, b: number} = {a: '', b: 0};
let sup8: {a: string | number, b:number} = sub8;

// array: object와 마찬가지
let sub9: Array<{a: string, b: number}> = [{a: '', b: 1}];
let sup9: Array<{a: string | number, b:number}> = sub9;


// 반병
class Person {}
class Developer extends Person {
    coding() {}
}
class StartupDelveloper extends Developer {
    burning() {}
} 

// tellme: Developer를 인자로 받고 Developer를 리턴하는 형식의 함수를 인자로 받는 함수
function tellme(f: (d: Developer) => Developer) {}

tellme(function dToD(d: Developer): Developer {
    return new Developer();
});

tellme(function pToD(d: Person): Developer {
    return new Developer();
})

// error: '(d: StartupDelveloper) => Developer' 형식의 인수는 '(d: Developer) => Developer' 형식의 매개 변수에 할당될 수 없습니다.
// sToD에서 StartDeveloper에만 정의된 함수를 실행하거나 프로퍼티를 사용했을때 tellme의 d는 Developer이기 때문에 알 수 없다
// tellme(function sToD(d: StartupDelveloper): Developer {
//     return new Developer();
// })
