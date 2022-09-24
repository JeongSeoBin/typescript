const hi = () => {
    // target을 'es5'나 'es6'로 설정하고 lib을 설정하지 않으면 'dom' type defination 라이브러리를 사용하게 된다
    // console은 lib.dom.d.ts에 정의되어 있기 때문에 위와 같이 target과 lib을 설정하여 dom라이브러리를 가져와 사용할 수 있다  
    console.log('hello');
}