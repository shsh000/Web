// variable3.js

let str = '';
let num = 2;
str = '<table border = 1>';
for (let i = 1; i < 10; i++) {
    str += '<tr><td>' + num + '</td>' + '<td>' + '*' + '</td>' +
        '<td>' + i + '</td>' + '<td>' + '=' + '</td>' + '<td>' +
        (num * i) + '</td></tr>';
}
str += '</table>';
document.write(str);

// 달력
// let month = 7;
// let days = ['일', '월', '화', '수', '목', '금', '토'];
// str2 = '<br><table border = 1><caption>' + month + '월 달력</caption><tr>';
// for (let day of days) {
//     str2 += '<th>' + day + '</th>';
// }
// str2 += '</tr><tr>';
// let vtd = getFirstDay(6); // 4
// for (let i = 1; i < vtd; i++) {
//     str2 += '<td></td>';
// }
// for (let i = 1; i <= 31; i++) {
//     str2 += '<td>' + i + '</td>';
//     if ((vtd - 1 + i) % 7 == 0) {
//         str2 += '</tr><tr>';
//     }
// }
// str2 += '</tr></table>';
// document.write(str2);
// console.log(getFirstDay(6));


let mon = 6;
showCalendar(12);
function showCalendar(mon) {
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    str = '<table border = 1><caption>' + mon + '월 달력</caption><tr>';
    for (let day of days) {
        str += '<th>' + day + '</th>';
    }
    str += '</tr><tr>';
    let vtd = getFirstDay(mon);
    for (let i = 1; i < vtd; i++) {
        str += '<td></td>';
    }
    for (let i = 1; i <= getLastDate(mon); i++) {
        str += '<td>' + i + '</td>';
        if ((vtd - 1 + i) % 7 == 0) {
            str += '</tr><tr>';
        }
    }
    document.write(str);
}

console.log(getLastDate(mon));

function getFirstDay(mon) {
    switch (mon) {
        case 1:
            return 7;
        case 2:
            return 3;
        case 3:
            return 3;
        case 4:
            return 6;
        case 5:
            return 1;
        case 6:
            return 4;
        case 7:
            return 6;
        case 8:
            return 2;
        case 9:
            return 5;
        case 10:
            return 7;
        case 11:
            return 3;
        case 12:
            return 5;
    }
}

function getLastDate(mon) {
    // 1,3,5,7,8,10,12 => 31
    // 4,6,9,11 => 30
    // 2 => 28
    switch (mon) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
    }
}