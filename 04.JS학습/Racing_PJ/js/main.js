// Racing PJ 메인 JS - main.js

//////// 전역변수구역 /////////////////////
let rabbit, turtle, msg; //토끼,거북,메시지
let rbpos = 0; //토끼의 위치값(left)
let ttpos = 0; //거북의 위치값(left)
let autoI; //인터발함수용
let level; //게임레벨용
let ttsts = 0; //거북동작상태(0-허용,1-불허용)
//////////////////////////////////////////

/////// 로드구역 ////////////////////
window.addEventListener("DOMContentLoaded", function () {
    console.log("로딩완료!");

    //// 키보드 사용금지설정 ////
    //                document.body.onkeydown = function(){
    //                    return false;//기본기능 막기!
    //                };/////// 키보드함수 /////////////////

    // 게임 조작버튼 클릭시 이벤트 연결하기
    // 이벤트종류: click
    // 이벤트대상: #btns a
    let btns = document.querySelectorAll("#btns a");
    //console.log("버튼개수:"+btns.length);

    // 1. 토끼 //
    btns[0].onclick = function () {
        // 호출확인
        //console.log("나,토끼!");
        //인터발설정함수 호출
        autoRun();
    }; ////// 클릭함수 ////////////

    // 2. 거북 //
    btns[1].onclick = function () {
        // 호출확인
        //console.log("나,거북!");
        //거북함수 호출
        goT1();
        this.blur();
    }; ////// 클릭함수 ////////////

    // 3. 처음으로 //
    btns[2].onclick = function () {
        // 호출확인
        //console.log("처음으로!");
        // 페이지 리로드!
        window.location.reload();
        // window 객체이름은 생략가능!
    }; ////// 클릭함수 ////////////

    ///// 전역변수에 요소를 로드한다!
    // 토끼로드
    rabbit = document.getElementById("r1");
    // 거북로드
    turtle = document.getElementById("t1");
    // 메시지로드
    msg = document.getElementById("msg");
    // 레벨로드
    level = document.getElementById("level");
}); /////////// 로드구역 /////////////
////////////////////////////////////
////////////////////////////////////

/*/////////////////////////////////////////
    함수명: goR1
    기능: 토끼의 left값을 변경하여 토끼를 오른쪽
            으로 이동함
*/ /////////////////////////////////////////
function goR1() {
    // 1. 함수호출확인
    //console.log("토끼달림!!!");
    // 2. 대상선정: rabbit 변수의 토끼
    // 3. 변경내용: 토끼의 left값을 1씩증가
    // 토끼 left위치값 전역변수 rbpos를 이용!
    rbpos++; //1씩증가
    rabbit.style.left = rbpos + "px";
    //console.log("토끼위치:" + rbpos);

    // 승자판별함수 호출!!!
    whoWinner();
} /////////// goR1함수 //////////////////////
///////////////////////////////////////////

/*////////////////////////////////////////
    함수명: autoRun
    기능: 토끼이동함수를 자동으로 인터발호출
*/ ////////////////////////////////////////
function autoRun() {
    //1.함수호출확인
    //console.log("자동뛰어!");
    //2.토끼함수 인터발호출
    // 중복실행 방지를 위해 autoI에 할당안됨상태
    // 를 이용하여 if문으로 감싸준다!
    if (!autoI) {
        //할당안되었을때(false)만 들어감!
        // 토끼의 설정시간을 select박스에서 가져옴
        autoI = setInterval(goR1, Number(level.value));
        console.log("현재레벨:" + level.value);
    } //// if문 //////////////////////////
} ///// autoRun함수 /////////////////////////
///////////////////////////////////////////

/*///////////////////////////////////////////
    함수명: goT1
    기능: 거북의 left값을 변경하여 오른쪽으로 이동
*/ //////////////////////////////////////////
function goT1() {
    // 승부가 끝난후 작동정지!
    if (ttsts === 1) return false;
    // return false를 만나면 아래코드가
    // 실행되지 않고 함수를 빠져 나간다!

    // 1. 함수호출확인
    //console.log("거북달림!");
    // 2. 대상선정: turtle변수의 거북
    // 3. 변경내용: 거북의 left값을 16px씩 증가
    // 거북위치 전역변수 ttpos를 이용
    ttpos += 16; //16씩증가(+=대입연산자)
    turtle.style.left = ttpos + "px";
    //console.log("거북위치:"+ttpos);

    /// 거북 출발시 토끼자동출발 호출!
    autoRun();
} ////////// goT1함수 ////////////////////////
////////////////////////////////////////////

/*//////////////////////////////////////////
    함수명: whoWinner
    기능: 도착점 통과시 토끼와 거북의 left값을
        비교하여 더 큰 값을 승자로 메시지 띄우기
*/ //////////////////////////////////////////
function whoWinner() {
    // 1.함수호출확인(토끼에게 호출권을 준다!)
    console.log("누가승자?");
    // 2.대상선정: rabbit, turtle, msg 변수
    // 3.구현내용: 계속 업데이트 되는 토끼와 거북
    //          위치를 비교하여 650px을 넘는 순간
    //          경기를 종료하며 승자를 판별하여
    //          해당 메시지를 띄워준다.
    if (rbpos > 650 || ttpos > 650) {
        // 토끼나 거북이 결승선 통과시!
        //console.log("도착!");
        // 1.토끼멈춤
        clearInterval(autoI);
        // 2.거북멈춤
        ttsts = 1; //goT1함수에서 막아놓음!
        // 3.승자메시지 띄우기
        if (rbpos > ttpos) {
            //토끼승!
            msg.innerText = "토끼가 승리하였군요! 역쉬! 나이쓰!!!";
        } /// if문 /////////////
        else if (ttpos > rbpos) {
            //거북승!
            msg.innerText = "거북이 이기다니! 기적이양!!!";
        } //// else if문 //////
        else {
            // 비겼을때
            msg.innerText = "다시해~!!";
        } //// else문 //////////

        // 4. 메시지 보이게하기
        msg.style.display = "block";
    } ////////// if문 ////////////////
} ///////// whoWinner함수 ////////////////////
////////////////////////////////////////////
