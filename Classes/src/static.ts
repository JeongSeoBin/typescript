/*
    static property & methods
    - object끼리 공통적으로 사용할 경우 static으로 만들어서 공유할 수 있다
      예를들어 다른 객체에서 변경한 값을 그대로 갖고 싶을때 

    - 클래스명으로만 접근이 가능하고 객체로는 접근이 불가능하다
*/

class Info3 {
    // static property
    public static CITY = 'seoul';
    // static method
    public static hello() {
        console.log('hello');
    }

    public print() {
        console.log('hello', Info3.CITY);
    }
    public change(city: string) {
        Info3.CITY = city
    }
}

const info3 = new Info3();
// static은 객체로 접근 불가능
//info3.hello();

// static은 클래스로 접근 가능
Info3.hello();
Info3.CITY;

const info31 = new Info3();
// static 공유 데이터를 변경
info3.change('LA');
// 다른 객체가 변경한 값으로 출력된다
info31.print();