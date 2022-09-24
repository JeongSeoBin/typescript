/*
    array
    - object의 일종
    - 같은 타입의 요소들을 모아둔 자료형
    - Array<type> 또는 type[]
*/

// 서로 다른 타입의 데이터를 하나의 배열에 담으려 할때
let list: (number | string)[] = [1,2,3, "4"];

// jsx나 tsx에서 충돌날 수 있으므로 권장하지 않음
let list2: Array<number> = [1,2,3];