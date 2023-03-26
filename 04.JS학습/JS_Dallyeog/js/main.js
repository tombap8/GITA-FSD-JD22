// 2023캘린더

// 가져오기
import MakeDallyeog from "./calendar.js";


// 생성자함수를 인스턴스로 호출하기
// MakeDallyeok(요소선택자)
// -> .calbx
let calbx = new MakeDallyeog(".calbx");
calbx.initDallyeok();

let calbx2 = new MakeDallyeog(".calbx2");
calbx2.initDallyeok();

$(".myipt").click(function(){
    console.log(this);
    $(this).next().find(".calender").show();
})


