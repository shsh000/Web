// array_basic2.js

let data = `[{"id":1,"first_name":"Freeland","last_name":"Betke","email":"fbetke0@apple.com","gender":"Agender","salary":2121},
{"id":2,"first_name":"Monti","last_name":"Orgee","email":"morgee1@hao123.com","gender":"Male","salary":2857},
{"id":3,"first_name":"Abelard","last_name":"Woodwin","email":"awoodwin2@spotify.com","gender":"Male","salary":4671},
{"id":4,"first_name":"Rodolfo","last_name":"Brodeur","email":"rbrodeur3@bandcamp.com","gender":"Male","salary":3697},
{"id":5,"first_name":"Pat","last_name":"Scandred","email":"pscandred4@japanpost.jp","gender":"Female","salary":3203},
{"id":6,"first_name":"Barrie","last_name":"Rudolf","email":"brudolf5@businessinsider.com","gender":"Polygender","salary":1433},
{"id":7,"first_name":"Yovonnda","last_name":"Maun","email":"ymaun6@gmpg.org","gender":"Female","salary":2458},
{"id":8,"first_name":"Udall","last_name":"Tremmil","email":"utremmil7@yellowbook.com","gender":"Male","salary":2115},
{"id":9,"first_name":"Bamby","last_name":"Machan","email":"bmachan8@godaddy.com","gender":"Female","salary":2266},
{"id":10,"first_name":"Miguelita","last_name":"Pughsley","email":"mpughsley9@jalbum.net","gender":"Female","salary":4445},
{"id":11,"first_name":"Vladimir","last_name":"McCrorie","email":"vmccroriea@reuters.com","gender":"Male","salary":1334},
{"id":12,"first_name":"Jacinta","last_name":"O'Corr","email":"jocorrb@technorati.com","gender":"Non-binary","salary":4090},
{"id":13,"first_name":"Hugues","last_name":"Aubri","email":"haubric@sciencedirect.com","gender":"Male","salary":2470},
{"id":14,"first_name":"Ernaline","last_name":"Tukesby","email":"etukesbyd@dyndns.org","gender":"Female","salary":3703},
{"id":15,"first_name":"Ruy","last_name":"McGinney","email":"rmcginneye@dyndns.org","gender":"Male","salary":1425}]`;

let objAry = JSON.parse(data); // JSON.parse() : 문자열 -> 오브젝트 타입으로 변경
console.log(data); // 문자열로 출력
console.log(objAry); // 오브젝트 타입으로 변경 후 출력

let over3000 = objAry.filter((val, idx) => { // filtering
    return val.salary >= 3000;
}).map((val, idx) => { // mapping
    let obj = {};
    obj.name = `${val.last_name}, ${val.first_name}`;
    obj.sal = val.salary;
    return obj;
});
console.log(over3000);
console.clear();

// Female 값만 가져와서 평균값
let avg, sum, cnt;
avg, sum, cnt = 0;
let gender = objAry.filter(val => val.gender == 'Female')
    .forEach(val => {
        sum += val.salary;
        cnt++;
    });
avg = sum / cnt;
// objAry.filter(val => val.gender == 'Female')
// .forEach(val => {
//     sum += val.salary;
//     cnt++;
// });
// avg = sum / cnt;
console.log(`사원(Female)의 평균 급여 : ${avg}`);

let salaries = [];
objAry.forEach(val => salaries.push(val.salary));
// salaries = objAry.map(val => val.salary);
console.log(salaries);

function getMaxValue(ary) {
    // 배열요소에서 제일 큰 값을 반환하는 함수
    let max = 0;
    ary.forEach(val => {
        if (max < val) {
            max = val;
        }
    });
    return max;
}
let maxVal = getMaxValue(salaries);
console.log(`가장 큰 값 : ${maxVal}`);

function sortAscend(ary = []) {
    // 오름차순 정렬 함수
    let numAry = ary;
    let newAry = [];
    ary.forEach(val => {
        let maxVal = getMaxValue(numAry);
        newAry.push(maxVal);
        let idx = numAry.indexOf(maxVal);
        numAry.splice(idx, 1, 12345);
    });
    return newAry;
}
let sortAsc = sortAscend(salaries);
console.log(`오름차순 정렬 : ${sortAsc}`);

console.log(salaries);

// reduce 메소드 : 값을 누적하여 하나의 결과값 반환
// [1,2,3,4]
// result = [1, 2, 3, 4].reduce(function (accum, curr, curIdx, ary) {
//     console.log(`누적값 : ${accum}, 현재값 : ${curr} => 두 수의 합 : ${accum + curr}`);
//     return curr + accum;
// }, 0); // map, filter 메소드
// console.log(`최종 결과 : ${result}`)

result = salaries.reduce(function (accum, curr, curIdx, ary) {
    console.log(`누적값 : ${accum}, 현재값 : ${curr} => 두 수의 합 : ${accum + curr}`);
    return curr + accum;
}, 0); // map, filter 메소드
console.log(`최종 결과 : ${result}`);

result = [1, 2, 3, 4].reduce(function (accum, curr) {
    if (curr % 2 == 0)
        accum.push(curr); // 현재값 배열에 추가
    return accum;
}, []); // accum = [1], [1, 2], [1, 2, 3], [1, 2, 3, 4]

// result = [1,2,3,4].map(val => val);
// result = [1,2,3,4].filter(val => {
//     if(val % 2 == 0) {
//         return val;
//     }
// });

// <ul><li>Apple</li><li>Banana</li><li>Cherry</li><ul>
result = ['Apple', 'Banana', 'Cherry'].reduce((accum, curr, currIdx, ary) => {
    if (currIdx == 0) {
        accum = '<ul>';
    }
    accum += `<li>${curr}</li>`;
    if (currIdx == ary.length - 1) {
        accum += '</ul>';
    }
    console.log(accum);
    return accum;
}, '');
console.log(result);
document.write(result);

// max 값을 반환
result = [3, 2, 4, 1, 5].reduce(function (accum, curr) {
    if (accum > curr)
        return accum;
    else return curr;
}, 0);
console.log(`배열최대값 : ${result}`);

// min 값을 반환
result = [3, 2, 4, 1, 5].reduce(function (accum, curr) {
    if (accum < curr)
        return accum;
    else return curr;
}, Number.MAX_SAFE_INTEGER);
console.log(`배열최소값 : ${result}`);

// 배열 합 구하기
result = [3, 2, 4, 1, 5].reduce((accum, curr) => {
    return accum + curr;
});
console.log(`배열합계 : ${result}`);

// 배열 평균 구하기
result = [3, 2, 4, 1, 5].reduce((accum, curr, currIdx, ary) => {
    if(currIdx == ary.length - 1) { // 마지막 순번일 경우
        return(accum + curr) / ary.length;
    }
    return accum + curr;
});
console.log(`배열평균값 : ${result}`);