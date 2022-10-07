// CGV PJ 메인 페이지 JS - main.js

//////////////////// 로드구역 ///////////////////
window.addEventListener("DOMContentLoaded", () => {

    // 호출확인!
    console.log("로딩완료!");

    // 예고편 선택메뉴 a요소 -> movlink변수
    const movlink =
        document.querySelectorAll(".mlist a");
    // console.log(movlink);
    // html요소를 변수에 담으면
    // 여러개의 요소일 경우 querySelectorAll()을 사용하여
    // HTML컬렉션에 저장함!
    // 여러개의 내부 주소가 있고 번호로 되어있음
    // 0부터 시작함!
    // 순번의 요소를 선택하는 방법은?
    // 컬렉션변수.item(순번) 또는 컬렉션변수[순번]

    // a요소 개수
    const len = movlink.length;
    // length는 개수를 구해오는 속성

    // for문을 이용하여 링크 설정하기
    // for(시;한;증){실행코드}

    for (let i = 0; i < len; i++) {

        // 순서대로 a요소에 click 이벤트 설정하기!
        // 대상: movlink변수
        movlink.item(i).onclick = function () {
            chgMV(this)
        };
        // onclick은 a요소의 이벤트 속성임
        // 이퀄 오른쪽에 할당되는데
        // 이때 chgMV() 함수를 직접쓰면 함수가 바로 실행됨
        // 따라서 이벤트 발생시 호출하려면
        // 익명함수 즉, function(){} 안에 써야함!
        // 이것은 마치 <a href="" onclick="chgMV()">
        // 라고 설정한것과 같다!!!

        // 이벤트에 할당한 익명함수 안의 함수에 this를 보내면
        // 이벤트가 걸린 요소자신이 함수에 전달된다!!!

        // console.log("진짜도니?", i);

    } ////////// for /////////////

    ////////////////////////////////////////////////
    ///// 영화선택 메뉴 li 클릭시 클래스 적용하기! ////
    ////////////////////////////////////////////////

    // 대상: .mlist ul>li
    const mli =
        document.querySelectorAll(".mlist ul>li");
    // console.log(mli);

    // 대상을 모두 클릭설정하여 
    // 클릭시 클래스 on넣기!
    for (let x of mli) { // x는 요소자신

        // console.log("x는?",x);

        // 클릭 이벤트 설정하기
        x.onclick = () => {
            // 1.초기화하기(모두on제거!)
            // ele는 각각의 요소자신(li)
            mli.forEach(
                ele => ele.classList.remove("on"));
            // 2.클릭된 자신에게 클래스 on넣기!
            x.classList.add("on");
        }; ////// click ////////

    } ////////// for of /////////////

    /****************************************************** 
        [ 클래스 컨트롤 내장객체: classList ]
        -> 객체하위 메서드
        1. add(클래스명) -> 클래스추가
        2. remove(클래스명) -> 클래스제거
        3. toggle(클래스명) -> 클래스추가/제거
        4. constain(클래스명) -> 클래스유무판별(true/false)
    ******************************************************/







}); ////////////// 로드구역 /////////////////////


/***************************************** 
    함수명: chgMV
    기능: iframe의 영화예고편 변경하기!
*****************************************/
function chgMV(ele) { // ele -> 전달되는 a요소
    // 전달변수는 선언없이 바로 씀!

    // 0. 전달되는 a요소의 "data-mv" 속성값 읽어오기
    let minfo = ele.getAttribute("data-mv");
    // getAttribute(속성명) -> 요소의 속성값 읽어오는 내장함수
    // setAttribute(속성명,값) -> 요소값셋팅 내장함수

    // 1. 호출확인
    // console.log("바꿔!",minfo);

    // 2. 변경대상: #screen iframe
    const tg =
        document.querySelector("#screen iframe");

    // 3. 변경내용: 대상요소의 src속성을 변경함!
    // src값 중 동영상 ID만 변수에 담긴것으로 변경하여 반영함!
    tg.src =
        `https://www.youtube.com/embed/${minfo}?autoplay=1`;

} ////////////// chgMV 함수 ////////////////






// [익명함수란?]
// 코드를 실행하지않고 저장하는 메모리공간
// 단, 이름이 없음
// 즉, 주소지가 없음
// 왜? 호출하는 방법을 응용할 수 있도록 함!

// 호출법
// 1. 변수에 할당하는 방법 -> 변수명이 함수명이 됨!
// 2. 이벤트와 연결하는 방법 -> 이벤트가 발생시 함수실행

// console.log("난 바깥이야!");

var myFn = function () {
    console.log("난 안이야!");
}

// 익명함수 호출!
// myFn();