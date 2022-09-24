/*
    Singleton pattern
    - 애플리케이션이 실행되는 동안에 단 하나의 객체만 생성하는 패턴
    - 적용방법
      1. new 키워드를 통해 객체를 생성하는 행위룰 막아야 한다
      2. 생성자를 대신하여 객체를 만들어 리턴할 함수를 작성한다
      3. 서로 다른 객체끼리 공유할 단 하나의 객체를 생성한다

*/

class ClassName {
    // 서로 다른 객체들이 공유할 단 하나의 객체
    private static instance: ClassName | null = null;

    // new 키워드를 통해 객체를 생성하는 행위룰 막아야 한다
    // -> 생성자를 private로 설정
    private constructor() {}

    // new대신 객체를만들 수 있는 함수 선언
    public static getInstance(): ClassName {
        // 객체가 있으면 리턴, 없으면 만들어서 리턴
        if(ClassName.instance === null){
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}

const objName = ClassName.getInstance();
const objName2 = ClassName.getInstance();

console.log(objName === objName2);

