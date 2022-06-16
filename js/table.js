// table.js

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
            this.tag += '</tr>'
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


// 클래스 예제(p.99 ~ 101)
class Estimate {
    // 생성자
    constructor(param) {
        this.unit = param;
    }    
    // 메소드(견적가 얻기)
    getEstimate(unitType, width, height) {
        let priceInfo = this.unit.find(item => item.type == unitType);
        return priceInfo.price * width * height;
    }
    // 메소드(배열에 요소 추가)
    addUnit(unit) {
        this.unit.push(unit); // push : 배열에 새로운 요소 추가
    }
}
let unitInfo = [{type : 'wood', price : 100},
                {type : 'iron', price : 300},
                {type : 'plastic', price : 200}];
const estimator = new Estimate(unitInfo);
estimator.addUnit({type:'glass', price : 500});

let result = estimator.getEstimate('wood', 20, 20);
console.log('wood 가격 : ' + result); // 40000 = price(100)*width(20)*height(20)

let amt = estimator.getEstimate('glass', 20, 20);
console.log('glass 가격 : ' + amt); // 200000

console.log(unitInfo); // 추가된 항목까지 현재 리스트 조회


// object 타입으로 가능
// let obj = {
//     unit: unitInfo,
//     getEstimate: function() {},
//     addUnit: function() {}
// };
let obj = {};
obj.unit = unitInfo;
obj.getEstimate = function(unitType, width, height) {
    let priceInfo = this.unit.find(item => item.type == unitType);
    return priceInfo.price * width * height;
}
obj.addUnit =  function(unit) {
    this.unit.push(unit);
}
let result2 =  obj.getEstimate('wood', 20, 20);
console.log(result2);
