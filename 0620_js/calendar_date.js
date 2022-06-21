// calendar_date.js

let today = new Date(); // 날짜 지정을 안하면 현재 날짜로 출력
today = new Date(2022, 5, 0); // 5 = 6, 월 정보는 0부터 시작
console.log(`올해는 ${today.getFullYear()}년 입니다.`);
console.log(`이번달은 ${today.getMonth()+1}월 입니다.`); // 0~11, 1월이 0부터 시작
console.log(`오늘은 ${today.getDate()}일 입니다.`);
console.log(`오늘은 ${today.getDay()}`); // 요일정보(일요일 0부터 시작)

// 6월 달력, 6월 1일의 요일정보, 6월의 마지막날
let year = 2021;
let month = 6;

makeCalendar(year, month);

function makeCalendar(y, m) {
    let dayInfo = new Date(y, m - 1).getDay();
    let dateInfo =  new Date(y, m, 0).getDate();
    // 년, 월 달력 정보 생성
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    cal = '<table border=1><caption>' + y + '년' + m + '월 달력</caption><tr>';
    for(let day of days) {
        cal += '<th>' + day + '</th>';
    }
    cal += '</tr><tr>';
    for(let i = 0; i < dayInfo; i++) {
        cal += '<td></td>';
    }
    for(let i = 1; i <= dateInfo; i++) {
        cal += '<td>' + i + '</td>';
        if((dayInfo + 1 + i) % 7 == 0) {
            cal += '</tr><tr>';
        }
    }
    document.write(cal);
    cal += '</table></tr>'
}