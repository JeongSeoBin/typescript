interface IPerson2 {
    name: string;
    age?: number;
}

// IPerson2의 property를 모두 상속받음
interface IKorean extends IPerson2 {
    city: string;
}

const k: IKorean = {
    name: '정서빈',
    city: '서울',
    age: 34
};