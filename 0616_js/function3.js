// function3.js

function sumNumber() {
    console.log(arguments);
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

sumNumber(1, 2, 3, 4, 5);
// sumNumber(1, 2, 3, 4, 5, 6, 7, 8);

// 나머지 파라미터(Rest Parameter)
function sumParam(...args) { // 갯수를 모르지만 가변적으로 처리, 배열요소
    let result = 0;
    args.forEach((val) => {
        result += val;
    }); // 콜백함수(callback)
    return result;
}
console.log(sumParam(1, 2, 3, 4, 5, 6, 7));

// 커링함수(Curring)
function orderSet(burger, beverage) {
    console.log('버거 : ' + burger + ', 음료 : ' + beverage);
}
orderSet('치즈버거', '콜라');

function orderSet_curring(burger) {
    return function (beverage) {
        console.log('버거 : ' + burger + ', 음료 : ' + beverage);
    }
}
let beverageFnc = orderSet_curring('치즈버거');
beverageFnc('사이다'); // () : 함수실행
beverageFnc('환타');
// orderSet_curring('치즈버거')('콜라');

// function orderSet2(burger) {
//     return function orderBeverage(beverage) {
//         return function orderSide(side) {
//             return function orderKetchup(yn) {
//                 return function orderChicken(count) {
//                     console.log('세트 : ' + burger + ', ' + beverage + ', ' + side + ', 케첩(' + yn + '), 조각치킨(' + count + '개)');
//                 }
//             }
//         }
//     }
// }
const orderSet2 = burger => beverage => side => yn => count => {
    console.log('세트 : ' + burger + ', ' + beverage + ', ' + side + ', 케첩(' + yn + '), 조각치킨(' + count + '개)');
}
let order = orderSet2('치즈버거')('콜라');
order('프렌치프라이')('y')('2');

// 펼침연산자(spread operator) : 변수명 앞에 마침표 3개
let args = [1, 3, 5];

function anyFnc(...args) {}
let another = [4, 5, 6];
console.log(args.concat(another)); // concat : 합치기
let otherArgs = [-1, ...args, -2]; // 두 배열요소를 합쳐서 새로운 배열 생성

let obj1 = {
    name: 'Hong',
    age: 20,
    weight: 64.7
};
let newObj = {
    name: 'Choi',
    age: 15,
    height: 165.5
};
let obj3 = {
    sno: '12345'
};
let obj2 = {
    ...newObj,
    ...obj1,
    ...obj3
}; // let ojb2={}  =  new Object();
// 원래 있는 속성은 그대로 두고 새로운 속성만 추가
console.log(obj1, obj2);

let comObj = {
    sno: '22-010101',
    sname: 'Hong',
    score: 80,
    hobby: ['reading', 'eating'],
    pet: [{
        cname: '야옹이',
        age: 2
    }, {
        dname: '멍멍이',
        age: 3
    }]
}

comObj.sname; // Hong
comObj.hobby[0]; // reading
comObj.pet[0].age; // 2
console.log(comObj.pet[1].dname);

// 나머지 파라미터 함수 정의
function restparams(...args) {
    console.log(args);
}
restparams(1, 2, 3, 4);

// 나머지 파라미터, 화살표 함수
const rest2 = (arg1, arg2, ...args) => {
    console.log([arg1, arg2, args]);
}
// rest2(1,2,3,4);
// rest2(1,2);
rest2(1);

// 나머지 파라미터 합계 구하기
// function sum(a, b, ...args) {
//     let result = 0;
//     if(a != undefined) {
//         result = a;
//     } else {
//         return 0;
//     }
//     if(b != undefined) {
//         result += b;
//     }
//     args.forEach(function(arg) {
//         result += arg;
//     })
//     return result;
// }

// 나머지 파라미터 합계 구하기
const sum = (a, b, ...args) => {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b;
    }
    result += args.length > 0 ? args.reduce((subsum, arg) => subsum += arg) : 0;
    // subsum : 누적되는값, arg : 현재 배열
    return result;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2));
console.log(sum(1));

// 나머지 파라미터 곱셈
let multiply = (a, b, ...args) => {
    let result = a * b;
    for (let i = 0; i < args.length; i++) {
        result *= args[i];
    }
    return result;
}
console.log(multiply(1, 2, 3, 4));

// 함수 스포크 체인
var a = 1;
var b = 5;

function outerFunc() {
    function innerFunc() {
        a = b;
    }
    console.log(a);
    a = 3;
    b = 4;
    innerFunc();
    console.log(a);
    var b = 2;
    console.log(b);
}
outerFunc();
console.log(b);