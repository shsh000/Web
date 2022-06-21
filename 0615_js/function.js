// function.js

function sum(number1, number2) {
    let result = number1 + number2;
    console.log(result);
    return result; // return문이 없으면 undefined 출력됨
}
sum(10, 20); // 함수 호출

function makeTd(val) {
    return '<td>' + val + '</td>';
}

function makeTr(val) {
    return '<tr>' + val + '</tr>';
}

let values = ['Hong', 'Hwang', 'Choi'];

let str = '<table border = 1>';
for (let val of values) {
    let td = makeTd(val); // <td>Hong</td>
    str += makeTr(td); // <tr><td>Hong</td></tr>
}
str += '</table>';
document.write(str);