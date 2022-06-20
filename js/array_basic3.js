// array_basic3.js

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

// prompt : 사용자에게 입력을 요청하는 프롬프트 상자를 화면에 표시
let gender = prompt('Male or Female 을 입력');
console.log(gender); // 사용자 입력값대로 콘솔창에 출력

let objAry = JSON.parse(data); // 문자열 -> 오브젝트

// 표(table) 형태로 정보 출력
let result = objAry.reduce(function (accum, curr, currIdx, ary) {
    if (currIdx == 0) {
        accum += '<table border = 1>';
    }
    if (curr.gender == 'Male') {
        accum += '<tr>';
        for (let gen in curr) {
            accum += `<td>${curr[gen]}</td>`;
        }
        accum += '</tr>';
    }
    if (currIdx == objAry.length - 1) {
        accum += '</table>';
    }
    return accum;
}, '');
document.write(result);
console.log(result);