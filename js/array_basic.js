// array_basic.js

let arr = []; // new Array(); new Object()/{}
arr[0] = 'Hello';
arr[1] = 100;
arr[2] = true;

delete arr[1]; // 지운 공간은 empty로 표시

console.log(arr);
console.log(arr.length); // 비어있는 공간까지 인식
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 확장 for
for(let val of arr) {
    console.log(val);
}

// forEach(비어있는 값은 제외)
arr.forEach((val, idx) => {
    console.log(`${idx} => ${val}`); // 배열값이 undefined면 반복에서 제외
});

console.clear();

// 배열 추가, 삭제
arr.push('Apple'); // 배열 제일 마지막에 추가
arr.unshift('Banana'); // 배열 제일 앞에 추가
arr.pop(); // 배열 마지막 삭제
arr.shift(); // 배열 첫번째 삭제
arr.splice(0, 0, 'Apple'); // 추가, 수정, 삭제(대체할 값이 없으면)

arr.forEach((val, idx) => {
    console.log(`${idx} => ${val}`);
});