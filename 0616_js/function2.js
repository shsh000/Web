// function2.js

// 함수 정의문
function sumAry(ary) { // ()의 값 : 매개변수(parameter)
    let result = 0;
    for (let i = 0; i < ary.length; i++) {
        result += ary[i];
    }
    return result;
}
// const sumAry = function(ary) {...} => 함수정의문 => 함수표현식 처리

let args = [1, 2, 3, 4, 5]; // 매개값(argument)
sumAry(args); // 실행문 호출
// 위 두줄과 동일
// sumAry(1,2,3,4,5);

let arrNum = [1, 2, 3];
sumAry(arrNum);

// 함수 표현식
const sum = function (num1, num2) {
    if (!num1) { // undefined(false의 의미) : 값이 없거나(null) 0인 상태 
        num1 = 0;
    }
    num2 = num2 == undefined ? 0 : num2; // 삼항연산자
    // num2가 undefined 상태면 num2에 0을 넣음
    return num1 + num2;
}
console.log(sum(10)); // 함수정의문()

const sum2 = sum; // 함수정의문
console.log(sum2(10, 20));

console.log(sumAry);

// 함수 표현식
// 화살표함수, 매개값이 하나면 괄호도 생략가능
// 메소드의 매개값(콜백함수)
const sayHello = name => 'Hello' + name;
console.log(sayHello(' ' + '홍길동'));

let arr = ['홍길동', '김영수', '최민식'];
// forEach : 각각의 요소들에 대해서 실행
arr.forEach((val /*, idx, ary*/ ) => console.log(sayHello(' ' + val)));
// arr.forEach(function(val/*, idx, ary*/) {
//     console.log(sayHello(' ' + val));
// });

arrNum = [29, 34, 12, 55, 29, 42];
// 1. 배열의 각 요소 중 짝수의 값 합계 sumEven(args);
function sumEven(ary) {
    let sum = 0;
    ary.forEach(function (ary) {
        if (ary % 2 == 0) {
            sum += ary;
        }
    });
    return sum;
}
console.log(sumEven(arrNum));

// 2. 배열의 각 요소 중 홀수번째 요소의 합계 sumOdd(args);
function sumOdd(ary) {
    let sum = 0;
    ary.forEach(function (ary, idx) {
        if(idx % 2 == 0) {
            sum += ary;
        }
    });
    return sum;
}
console.log(sumOdd(arrNum));