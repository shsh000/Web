// for_loop2.js

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

let ary = JSON.parse(data);
console.log(ary);
// forEach
ary.forEach(elem => {
    if (elem.gender == 'Female') {
        console.log(elem)
    }

});
let femaleAry = ary.filter(elem => elem.gender == 'Female');
console.log(femaleAry);

console.clear();

let newCompany = ary.map(elem => {
        let newElem = {}; // A'
        newElem.nid = elem.id;
        newElem.name = elem.first_name + ', ' + elem.last_name;
        newElem.salary = elem.salary * 1.5;
        newElem.isNew = elem.salary > 3000 ? false : true;
        return newElem;
    }) // A -> A'
    .filter(elem => elem.isNew) // true 값만 담아줌
console.log(newCompany);
console.clear();

// 새로운 회사 직원들의 급여합계 구하기
let result = newCompany.reduce((accum, curr) => {
    // console.log(accum, curr);
    accum += curr.salary;
    return accum;
}, 0);
console.log(result);