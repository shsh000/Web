// string_basic.js

let str = 'Hello'; // 문자열(string)
let str1 = new String('Hello'); // 문자열 객체(object)
console.log(str == str1); // true, == : 값만 비교
console.log(str === str1.valueOf()); // false, === : 타입, 값 모두 비교

// valueOf : 기본 데이터 타입으로 변환
let num = new Number(123); // number의 객체(object) 타입
let num1 = 123; // number 타입
console.log(num == num1); // true
console.log(num.valueOf() === num1); // true

// 원시타입 : string, number, boolean
// 객체타입(기본 타입이 아닌것들) : 함수, object({name:?, age:?}), 배열, null

console.log((123).valueOf());
console.log('123');

console.log('Hello'.substring(0, 3)); // 정해놓은 값만큼 문자 출력
console.log(' Hello ');
console.log(' Hello '.trim()); // trim() : 좌,우 공백 제거
console.log('This is the only story'.slice(10, 15));
console.log('This is the only story'.substr(10, 5));

// indexOf()

// search()
// console.log('This is the only story'.replace('the', 'THE'));
let reg = /good/; // 정규표현식 new RegExp();
let regStr = 'bad MORNING, GOOD AFTERNOON, goodevening, and good night';
console.log(regStr.replace(/good\s/gi, 'bad ')); // g 옵션 : 전체 조회, i : 대소문자 상관없이 조회, \s : 공백

// sample 번호
let jmn = '9503041234567';
jmn = '950304-1234567';
jmn = '950304 2234567';

function checkGender(no) {
    // 입력번호의
    return '남자' || '여자';
}