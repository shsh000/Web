// object_table.js

let data = [
    {sname:'Hong', age:15, height:154, weight:45},
    {sname:'Hwang', age:20, height:165, weight:55}
]

class Table {
    // 생성자
    constructor(ary) {
        this.aryData = ary; // [{}, {}]
    }
    // 메소드
    createTable() {
        this.tag = '<table border = 1><tr>';
        // 헤더 정보 <thead></thead>
        for(let field in this.aryData[0]) { // {sname : 'Hong', age : 15}
            this.tag += '<th>' + field + '</th>';
        };
        this.tag += '</tr>';
        this.tag += '';
        // 바디 정보 <tbody></tbody>
        this.aryData.forEach((val, idx) => {
            this.tag += '<tr>';
            for(let field in val) {
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>';
        });

        this.tag += '</table>';
        return this.tag;
    }
}

let table = new Table(data);
let str = table.createTable(); // 표 형식으로 출력
console.log(str);
document.write(str);


// find : 배열의 특정값 찾기
let names = ['Hong', 'Hwang', 'Kim', 'park'];
names.push('Choi');

let searchName = names.find(function(val) {
    // return val == 'Hwang'; // 찾는 값이 없으면 undefined
    return val.length == 4; // 배열에 있는 문자열의 길이, 길이가 같은 값이 있으면 제일 첫번째 값으로 출력
});
console.log(searchName);