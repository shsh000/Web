// for_loop.js

// 배열관련 반복되는 메소드
// forEach : void
// map : [배열] A -> A'
// filter : [배열] A -> B
// reduce : 문자열, Number, [배열], {오브젝트}

let ary = [3, 5, 8, 9, 12]; // 배열객체 선언 = new Array();
ary.push(5); // <-> pop();
ary.unshift(7); // <-> shift();
// 7, 3, 5, 8, 9, 12, 5
ary.splice(3, 1); // 7, 3, 5, 9, 12, 5(대체 값이 없으면 삭제)

ary.forEach(elem => console.log(elem));

let newAry = [];
// 1.forEach
let result = ary.forEach(firstCallBack); // forEach => 리턴값이 없음

function firstCallBack(elem) {
    // console.log(elem);
    newAry.push(elem);
}

console.log(result); // undefined
console.log(`=============`);

// 2.map
result = ary.map(elem => elem * 2); // A -> A'(A * 2)
console.log(newAry);
console.log(result); // 배열에 *2 한 값으로 출력(14, 6, 10, 18, 24, 10)
console.log(`=============`);

// 3.filter A -> a
result = ary.filter((elem, idx) => idx > 3);
console.log(result);
console.log(`=============`);

// 4.reduce A -> 문자열, Number, [배열], {오브젝트}
result =  ary.reduce((accum, curr, currIdx, arry) => {
    console.log(accum, curr, currIdx);
    return accum + curr;
}, 0);
console.log(`=============`);

result = ary.reduce((accum, curr) => {
    console.log(accum, curr);
    accum.push(curr * 2);
    return accum;
}, []); // map 같은 기능
console.log(result);
console.log(`=============`);

result = ary.reduce((accum, curr, currIdx) => {
    if(currIdx > 3) {
        accum.push(curr * 2);
    }
    return accum;
}, []); // filter, map
console.log(result);