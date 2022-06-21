// context_this.js

let obj = {}; // new Object();
obj.act = function() {
    this.value = 'default value';

    function innerAct() {
        this.value = 'innerAct value';
        console.log('this.value: ' + this.value);
    }
    // 객체 참조를 넘기는 act()  메서드 안의 함수
    function innerReact(caller) {
        caller.value = 'innerReact value';
        console.log('this.value : ' + this.value);
        console.log('caller.value : ' + caller.value);
    }
    innerAct();
    console.log('obj 객체의 this.value : ' + this.value);

    innerReact(this); // obj 값
    console.log('obj 객체의 this.value : ' + this.value);
}
obj.act();