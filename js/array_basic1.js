// array_basic1.js

let names = [];
names.push('이희수');
names.push('인은지');
names.unshift('박소현');
names.splice(1, 0, '오지민');
names.splice(2, 0, '김가윤', '박경아');
names.splice(1, 2, '김가윤', '박경아');

let newNames = [];
names.forEach(function (val, idx) {
    if(idx % 2 == 0) {
        newNames.push(val);
    }
});

console.log(newNames);
console.clear();

// mapping A -> B 로 변환해서 반환
let mapAry = names.map(function(val, idx, ary) {
    if(idx % 2 == 0) {
        return val;
    }
});
console.log(mapAry); // 조건을 만족하지않으면 undefined 반환
// filter() : 조건을 만족하는값만 새로운 배열요소로 생성
let filterAry = mapAry.filter(function(val, idx) {
    return val;
});
console.log(filterAry);

// 위 두 방식(map, filter)을 합친것
let resultAry = names.map((val, idx) => {
    if(idx % 2 == 0) {
        return val;
    }
}).filter((val, idx) => {
    return val;
});
console.log(resultAry);