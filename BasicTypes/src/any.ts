/*
    Any
    - 어떤 타입이어도 상관없는 타입
    - 컴파일 타임에 타입체크가 정상적으로 이루어지지 않기 때문에 최대한 사용하지 않는 게 좋다

    - 타입을 추론할 수 있는 코드가 작성되지 않았다면 any로 판단
      이때 "noImplicitAny"옵션이 true로 설정되어 있다면 error가 발생하고 any라고 명시하여 에러를 제거한다
      * noImplicitAny
        any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션

    - 계속해서 객체를 통해 전파된다
*/

////////////////////////////////// any 타입을 사용하는 경우 ////////////////////////////////////////////

// 함수에서 수행하는 가능이 타입 규정을 필요로 하지 않은 경우
function returnAny(msg: any): any {
    console.log(msg);
}

const any1 = returnAny('리턴은 아무거나');

// 어떤 타입의 데이터인지 모르는 상태지만 어떤 일이든 할 수 있다
// typeSystem을 안전하게 사용하고 코드를 사용하는 사람에게 가이드를 주기 위해서는 사용하지 않는게 좋다
any1.toString();


// 동적인 데이터가 들어 오는 경우 런타임에 타입을 지정해야하고 처음부터 정확한 타입을 지정할 수 없는 경우
// 이처럼 어쩔 수 없는 경우 any를 사용하지만 그에 따른 처리가 필요하다
function leakingAny(obj: any){
    // any타입인 obj를 사용하기 전에 타입을 갈라 타입을 지정(unknown 형식)
    const a: number = obj.num; // 누수차단
    const b = a + 1;
    return b
}

const c = leakingAny({num: 0});
// 누수차단으로 c는 number타입이므로 타입이 안정되어 잘못된 코드를 막을 수 있다
// c.indexOf('0');  

/////////////////////////////////// any 타입 전파 ////////////////////////////////////////

let looselyTyped: any = {};
// 에러가 발생하지 않는다
// any 타입이 전파되어 a,b,c,d 모두 any
// any를 사용 이후 코드가 안정성을 잃을 수 있다 
const d = looselyTyped.a.b.c