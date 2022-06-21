// variable.js

// log : 함수
// 문자 쓸 때 "",'' 둘 다 사용 가능
console.log("Hello, World!");
document.write('<h3>Hello, World!</h3>');

// let : 변수 선언
let num = 0;
num = 'Hello';
num = 10; // number
num = 'ten'; // string
num = true; // boolean
num = null; // object = class의 인스턴스
let num1; // 값이 선언되지 않았기 때문에 undefined
console.log(typeof num); // typeof : 변수 타입을 알 수 있음
console.log(typeof num1);

num1 = 100;
// num2 = 200; 변수 선언이 없이 사용 => 전역객체(window)의 속성
let num2 = 200;
console.log(num1 + num2);

console.log(window);

// alert : 경고 팝업창을 띄워줌
// window.alert('안녕하세요');

// 변수 : 학생이름, 학생번호, 영어점수, 수학점수
let student = new Object(); // object 선언
// .sname, .sno ... = 속성
student.sname = '홍길동';
student.sno = '22-0123';
student.engScore = 90;
student.mathScore = 80;
console.log(student);
// 위와 같은 방식
let person = {
    pname: '김민수',
    age: 20,
    height: 175.5,
    showInfo: function() {
        return this.pname + ', ' + this.age + ', ' + this.height;
    }
};
person.weight = '68.5'; // person에 weight라는 항목 추가

console.log(person); // person의 전체 속성 출력
console.log(person.pname); // person의 특정 속성만 출력
console.log(person.showInfo());
console.log(person['age']); // person의 특정 속성만 출력
let field = 'height'; // 새로 변수를 선언하여 출력하는 방법
console.log(person[field]);

// 전체 필드를 반복(loop) for .. in = 객체의 반복에서 사용
for(let field in person) { //field = for 반목문 안에서만 쓰여지는 변수
    console.log(field, ' => ' , person[field]);
}
let x = 10;
let y = 20;

// debugger; 디버깅

// 변수 : me => 이름, 취미, 연락처, 주소, 소개:이름,취미,연락처
let me = {
    name:'유선희',
    hobby:'게임',
    tel:'010-1234-5678',
    address: '대구',
    Introduce: function() {
        return this.name + ', ' + this.hobby + ', ' + this.tel;
    }
};
console.log(me.Introduce());