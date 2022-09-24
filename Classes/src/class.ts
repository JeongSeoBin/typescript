/*
    # class
    - object를 만드는 설계도
    - class 이전에 객체를만드는 방법은 function
    - oop의 초석
    - typeScript에서는 클래스도 사용자가 만드는 타입

    # constructor & initialize
*/

// class 생성
class Person {
    // property
    // constructor가 구현되지 않았을 경우 직접 초기화
    name: string = "이름없음";
    // !: 개발자가 어디선가 값을 할당할테니 에러를 발샐하지 말라는 표시
    age!: number;

    // 생성자
    // object를 생성하면서 property 초기화
    // constructor(name: string) {
    //     this.name = name;
    // }

    // initialize

}

// object 생성
const p1: Person = new Person();
p1.age = 10;
console.log(p1);