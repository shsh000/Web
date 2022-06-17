// // 문자열 예제(p.155)

// // eval() : 문자열을 실행 가능한 자바스크립트 코드로 변환하는 전역 메소드(문자열만 변환)
// const calc1 = '1 + 2 * 3';
// const calc2 = new String('1 + 2 * 3');
// console.log(eval(calc1)); // 7
// console.log(eval(calc2)); // '1 + 2 * 3'

// // 문자열 객체 -> 원시타입으로 변환
// const calc3 = '1 + 2 * 3';
// const calc4 = new String('1 + 2 * 3');
// console.log(eval(calc3)); // 7
// console.log(eval(calc4)); // '1 + 2 * 3'
// console.log(eval(calc4.valueOf())); // 7

// // 문자열과 문자열 객체 비교
// let str2 = '문자열';
// let str3 = new String('문자열');
// let str4 = new String('문자열데이터');
// let str5 = str3.valueOf();

// console.log('==변수 타입==');
// console.log(typeof (str2)); // string
// console.log(typeof (str3)); // object
// console.log(typeof (str4)); // object
// console.log(typeof (str5)); // string

// console.log('==문자열 변수/객체 비교==');
// console.log(str2 == str3); // true
// console.log(str2 === str3); // false
// console.log(str2 == str3); // true
// console.log(str2 === str3); // false
// console.log(str2 == str3.valueOf()); // true

// console.log('==문자열 객체 생성자와 비교==')
// console.log(new String('문자열') == str3); // false
// console.log(new String('문자열') === str2); // false
// console.log(new String('문자열') == '문자열'); // true
// console.log(new String('문자열') == str2); // true
// console.log(new String('문자열') == new String('문자열')); // false
// console.log(new String('문자열') === new String('문자열')); // false
// console.log('문자열' == new String('문자열')); // true
// console.log('문자열' === new String('문자열')); // false

// // 문자열 공백 제거
// let str6 = ' how are you   to  day   everyone.   ';
// console.log(str6.trim()); // 앞뒤 공백만 잘라냄
// console.log(str6.replace(/\s/g, '')); // 문자열 모든 공백 제거 replace(/\s/g, '')
// console.log(str6.split(' ').filter(el => el != '').join(' '));
// console.log(str6.replace(/\s+/g, ' '));

// slice() 문자열 자르기
// const str1 = 'This is the only one story';
// console.log('==문자열 자르기 slice()==');
// console.log(str1.length);
// console.log(str1.slice(8, 11)); // the
// console.log(str1.slice(-8, 11)); // null
// console.log(str1.slice(0, -10)); // 26(문자열길이) - 10 = 16자리 반환 
// console.log(str1.slice(8, 100));
// console.log(str1.slice()); // 파라미터가 없으면 전체 문자열 반환

// substring() 문자열 자르기
// const str1 = 'This is the only one story';
// console.log('==문자열 자르기 substring()==');
// console.log(str1.substring(8, 11));
// console.log(str1.substring(11, 8));
// console.log(str1.substring(11, -8));

