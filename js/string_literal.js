// string_literal.js

let str = 'Hello'; // Hello
str = `Hello`; // ` : 벡틱, 문자열 표현

let person = {
    name : 'hong',
    age : 20,
    showInfo : function() {
        // return '이름 : ' + this.name + ', 나이 : ' + this.age;
        return `이름 : ${this.name}, 나이 : ${this.age}`;
    }
}

console.log(person.showInfo());

console.log(`나의 이름은 ${person.name}, 나이는 ${person.age}`);

console.log(`${person.age >= 20 ? '성인' : '청소년'}`);

// let strings = 'This\nis\na\nboy';
strings = `This
is
a
cat`;
console.log(strings);


// let jm = '950101-2234567';
let jm = '9803022341234';
function checkGender(num) {
    switch(jm.charAt(6)) {
        case '1':
        case '3':
            return '남자'
        case '2':
        case '4':
            return '여자'
    }
    // if(jm.charAt(7)=='1') {
    //     return '남자'
    // } else {
    //     return '여자'
    // }
}

let result = checkGender(jm);
console.log(result);