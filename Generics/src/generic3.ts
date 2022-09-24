// generic array
function helloArray<T>(message: T[]): T{
    return message[0]
}

// helloArray<string>(message: string[]): string
helloArray(['hello', 'world']);

// helloArray<string | number>(message: (string | number)[]): string | number
// -> 기대하는 리턴타입은 string이지만 이와 다르게 추론됨
helloArray(["hello", 10]);

// generic tuple
function helloTuple<T, K>(message: [T, K]): T {
    return message[0];
}

// helloTuple<string, string>(message: [string, string]): string
helloTuple(['hello', 'world']);

// helloTuple<string, number>(message: [string, number]): string
// tuple에서 정확히 타입을 지정하여 기대한 리턴타입이 추론됨
helloTuple(["hello", 10]);