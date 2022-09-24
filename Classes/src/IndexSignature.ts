/*
    class
    - 프로퍼티 이름이 동적인 경우
      {mark: 'male', jade: 'male'} // 1반
      {chloe: 'female', alex: 'male', anana: 'female'} // 2반

    - 동적인 프로퍼티
      [index: type]: 값의 type

    - 프로퍼티가 동적으로 생성되므로 초기화할 수 없다
*/

class Student {
    [index: string]: 'male' | 'female';
    // 만약에 어느 반이든 mark가 존재한다고 가정했을때
    // 문자열 형식인 mark에 male|female 현식을 할당할 수 없다
    // mark = 'male';
    // 따라서 male을 할당할 수 있는 타입 지정
    mark: 'male' = 'male';
}

const aClass = new Student();
aClass.mark = 'male';
aClass.jade = 'male';

const bClass = new Student();
bClass.chloe = 'female';
bClass.alex = 'male';
bClass.anana = 'female';