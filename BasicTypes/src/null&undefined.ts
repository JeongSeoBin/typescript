/*
    null & undefined
    - undefined와 null은 실제로 각각 undefined와 null이라는 타입을 가진다
    - undefined와 null 타입은 각각 undefined와 null값만 가질 수 있다
    - 타입과 값 둘다 소문자만 존재한다

    - tsconfig.json설정을 하지 않으면 undefined와 null은 모든 다른 타입의 서브타입이다
      -> 즉 number타입에 null 또는 undefined를 할당할 수 있다는 의미이다
    - tsconfig.json설정에 '--strictNullChecks'를 사용하면 null과 undefined는 자신타입에만 할당할 수 있다
      단, 이때 undefined는 void타입에 할당될 수 있다
      타입에 정확한 값이 할당될 수 있게 하기 위해 이 설정을 유지하여 사용하도록 한다
    - 다른 타입에 null과 undefined를 서브타입으로 이용하고 싶은 경우
      즉, 다른 타입에 null과 undefined를 할당할 수 있게 하려면 union type을 이용해야 한다

    null
    - null이라는 값으로 할당된 것을 null이라고 한다
    - 무언가 있는데 사용할 준비가 덜 된 상태
    - 런타임에서 typof 연산자를 이용해서 알아내면 object이다

    undefined
    - 값을 할당하지 않은 변수는 undefined값을 가진다
    - 무언가가 아예 준비안된 상태(선언만 하고 값을 할당하지 않은 상태)
    - object의 property가 없을때도 undefined
    - 런타임에서 typeof 연산자를 이용해서 알아내면 undefined이다
*/

// tsconfig.json에서 "strict": true 설정 시 다른 타입에 null이나 undefined 할당하면 에러
// let myName: string = null

// 다른 타입에 null이나 undefined를 할당하고 싶은 경우 -> union 타입
let union: string | null = null;
union = 'Mark';

// undefined와 null은 각자의 값만 할당할 수 있다
// let u: undefined = null;

// void 타입에는 undefined만 할당할 수 있다 (void는 타입으로만 존재하고 void 값은 존재하지 않는다)
let v: void = undefined;





