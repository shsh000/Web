// variable2.js

var l1; // hoisting 호이스팅

let ary = new Array();
ary[0] = 10;

ary = [20, 30, 15, 27]; // 배열 선언 및 초기화
ary[ary.length] = 50;
ary[ary.length] = 60;
ary[ary.length] = 65;
ary[10] = 100;
console.log(ary);
console.log(typeof ary[7]); // 배열 값이 선언되지 않은 상태 undefined

for(let i = 0; i < ary.length; i++) {
    console.log(i + '번째 값은 ' + ary[i]);
}

// 다른 타입의 요소도 배열에 같이 담을 수 있음
ary = ['사과', '바나나', '고구마', '수박', 32];

console.clear(); // 이전 로그 지우기

// for of 반복문(배열의 반복에서 사용)
document.write('<ul>');
for(let val of ary) {
    console.log(val);
    document.write('<li>' + val + '</li>');
}
document.write('</ul>');

ary = [
    {name:'홍길동', age:20, phone:'010-1111-2222'},
    {name:'김민수', age:25, phone:'010-2222-3333'},
    {name:'박우용', age:30, phone:'010-3333-4444'},
    {name:'최선식', age:19, phone:'010-4444-5555'}
]

// document.write('<ul>');
// for(let person of ary) {
//     document.write('<li>' + person['name'] + ', ' + person['phone'] + '</li>');
// }
// document.write('</ul>');

// 위 반복문의 다른 방식
// let str = '';
// str += '<ul>';
// for(let person of ary) {
//     str += '<li>' +  '이름 : ' + person['name'] + ', 나이 : ' + person['age'] + ', 연락처 : ' + person['phone'] + '</li>';
// }
// str += '</ul>';

str = '<table border = 1>';
for(let person of ary) {
    str += '<tr><td>' + person['name'] + '</td>'
           + '<td>' +  person['age'] + '</td>'
           + '<td>' + person['phone'] + '</td></tr>'; 
}
str += '</table>';
console.log(str);
document.write(str);

// const : 상수(값 초기화 후 변경 불가)
const v1 = 'hello';
// v1 = 'new';

// 원시타입
let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1, n2);
// 참조타입
let o1 = {name:'one'};
let o2 = o1;
o2.name = 'two'; // 같은 주소를 참조하기 때문에 하나의 값만 변경해도 다 같이 변경
console.log(o1, o2);

const obj = {
    sno:'22-12345',
    sname:'hong'
}
obj.sno = '22-22222';
// obj 상수 변수에 값을 새롭게 선언하는게 아닌 ojb가 참조하고 있는 속성 값을 변경하는건 가능
// obj = ''; 새로운 값을 할당하면 오류 발생
// 안에 들어있는 필드값은 변경 가능

// var(변수의 scope = 전역변수, 지역변수), 블럭이라는 개념이 없음
// var var1 = 'hello';
// function localFnc() {
//     var var2 = 'nice'; // 지역변수(local variable)
//     console.log(var2);
//     console.log(var1);

// }
// localFnc(); // 함수 호출
// console.log(var2); // 함수 영역을 벗어나면 실행 안됨
// console.log(var1);

// let
let var1 = 'hello';
{
    let var1 = 'new hello';
    console.log(var1);
}
function localFnc() {
    let var2 = 'nice';
    console.log(var2);
    console.log(var1);
}
localFnc(); // 함수 호출
console.log(var1);

// hoisting 호이스팅(let은 X)
console.log(l1);
var l1 = 'hello';
var l1 = 'hello';
console.log(l1);
