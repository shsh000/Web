// function1.js

function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(10, 20)); // 30
console.log(sum('10', '20')); // 1020

function minus(v1, v2) {
    return v1 - v2;
}
console.log(minus('20', '10')); // 10, 숫자타입으로 변환

function div(v1, v2) {
    return v1 / v2;
}
console.log(div('20', '10'));

function multi(v1, v2) {
    return v1 * v2;
}
console.log(multi('20', '10'));



function sumAry(ary) {
    let sum = 0;
    for (let num of numAry) {
        sum += num;
    }
    return sum;
}
let numAry = [20, 27, 33, 19, 44];
let result = sumAry(numAry);
console.log('배열의 합 : ' + result);

// forEach : 배열 전용 메소드
result = 0;
numAry.forEach(function (val) {
    if (val % 2 == 1) {
        result += val;
    }
}); // 메소드의 매개값으로 오는 함수 : 콜백함수
console.log('홀수 배열의 합 : ' + result);