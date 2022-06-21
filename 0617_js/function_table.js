// function_table.js

// 테이블 생성 함수
function createTable(aryData) {
    let fields = ['sname', 'age', 'height', 'weight'];
    let tag = '<table border = 1>';

    let head = createHead(fields); // <thead><tr><th>...</th></tr></thead>
    tag += head;

    let body = createBody(aryData); // <tbody><tr><td>값</td>...</tr></tbody>
    tag += body;

    tag += '</table>';
    return tag;
}

// 헤더부분 함수
function createHead(ary) {
    let tag = '<thead><tr>';
    for(let field in ary) {
        tag += '<th>' + ary[field] + '</th>';
    }
    tag += '</tr></thead>';
    return tag;
}

// 바디부분 함수
function createBody(ary) {
    let tag = '<tbody><tr>';
    ary.forEach((val) => {
        tag += '<tr>';
        for(let field in val) {
            tag += '<td>' + val[field] + '</td>';
        }
        tag += '</tr></tbody>';
    }); 
    return tag;
}

let data = [
    {sname:'홍길동', age:15, height:167.8, weight:64.5},
    {sname:'이찬희', age:20, height:175.3, weight:72.3},
    {sname:'김민수', age:24, height:182.3, weight:79.3}
]

let str = createTable(data);
document.write(str);