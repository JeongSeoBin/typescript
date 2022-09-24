/*
    인터페이스를 만들때 어떤 프로퍼티가 한번 값을 지정하면 바뀌지 않은 값이라면 readonly를 붙여 수정할 수 없게 만든다
*/

interface Person8 {
    name: string,
    age?: number,
    readonly gender: string
}

const p81: Person8 = {
    name: 'Anana',
    gender: 'female'
}

// error: 읽기 전용 속성이므로 'gender'에 할당할 수 없습니다
// p81.gender = 'male'