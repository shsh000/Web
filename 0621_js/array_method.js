// array_method.js

// some() : 조건 중 하나라도 만족하면 true
// every() : 모든 조건을 만족하면 true
// find(0) : 요소의 값 반환, findIndex : 인덱스 값을 반환
// indexOf() : 배열요소 -> 인덱스 값으로 반환
// sort() : 정렬
// split(구분자) : 문자열 -> 배열
// join(구분자) : 배열 -> 문자열

let idx = "This is a story".indexOf("st");
idx = [1, 2, 3, 4, 5].indexOf(8); // 찾는 값이 없으면 -1
console.log(idx);

let str = `Strong visual design has always been our focus.`;
let strAry = str.split(' '); // 반환타입 : 배열
console.log(strAry);

idx = strAry.indexOf('always');
console.log(idx);

let names = ['박은지', '윤정은', '박지혜', '김나희'];
idx = names.indexOf('김나희');

let result = names.find(function (elem, idx, ary) {
    return elem == '김나희';
});
console.log(result);

result = [6, 4, 3, 21, 14].find(elem => { // 요소의 값 반환
    return elem % 7 == 0;
});
result = [6, 4, 3, 21, 14].findIndex(elem => { // 인덱스 값을 반환
    return elem % 7 == 0;
});
result = [6, 4, 3, 21, 14].some((elem, idx, ary) => { // 조건 중 하나라도 만족하면 true
    // console.log(a, b, c);
    return elem > 20;
});
result = [6, 4, 3, 21, 14].every((elem, idx, ary) => { // 모든 조건을 만족하면 true
    return elem % 2 == 0;
});
console.log(result);
console.clear();

let tempAry = [];
for (let i = 0; i < 15; i++) {
    // parseInt : 정수로 변환
    // Math.random() : 0 <= x < 1
    let temp = parseInt(Math.random() * 10); // 1~10까지 임의의 수
    tempAry.push(temp);
    console.log(temp);
}
console.log('==========');

// 1. tempAry 배열의 값이 모두 짝수인지 확인
result = tempAry.every(elem => {
    return elem % 2 == 0;
});
console.log(`짝수의 값 : ${result}`);
console.log('==========');

// 2. tempAry 배열의 값중에서 3의 배수가 존재하는지 확인
result = tempAry.some(elem => {
    return elem % 3 == 0;
});
console.log(`3의 배수 : ${result}`);
console.log('==========');

// 3. 5보다 큰 값이 있으면 그 값을 반환
result = tempAry.find(elem => {
    return elem > 5;
});
console.log(`5보다 큰 값 : ${result}`);
console.log('==========');
console.clear();

result = [6, 4, 3, 21, 14].sort(function (a, b) {
    console.log(a, b);
    return a - b;  // B가 A보다 크면 음수 리턴 (교체)
    // 오름차순 정렬, 음
    // return b - a; // 내림차순 정렬, 양
    // if(a < b) {
    //     return -1; // 오름차순 정렬
    // } else {
    //     return 1; // 내림차순 정렬
    // }
});
console.log(result);
console.clear();


let objAry = [{
        name: '홍길동',
        age: 18
    },
    {
        name: '김민수',
        age: 20
    },
    {
        name: '박세민',
        age: 19
    }
];
console.log('홍' < '박'); // false, 가나다 순

result = objAry.sort(function(a, b) {
    // if(a.name < b.name) {
    //     return -1;
    // } else {
    //     return 1;
    // }
    // return a.name < b.name ? -10 : 10; // 이름 오름차순 정렬
    return a.age < b.age ? -1 : 1; // 나이 오름차순 정렬
});

// join(구분자) : 배열 -> 문자열
// result = ['홍길동', '백민규', '김상우'].join('-');
// '권소정, 김하은, 유선희, 김가윤' => 오름차순으로 정렬
names = '권소정, 김하은, 유선희, 김가윤'
let st = names.split(', ');
result = st.sort(function(a, b) {
    return a < b ? -1 : 1;
});
result2 = result.join(', ');
console.log(result2);


strAry = 'Strong'.split('');
let cnt = 0;
strAry.forEach((elem) => {
    cnt += elem == 't' ? 1 : 0;
    // console.log(cnt);
});
cnt = strAry.reduce((accum, curr) => {
    accum += curr == 't' ? 1 : 0;
    return accum;
}, 0);
// console.log(cnt);