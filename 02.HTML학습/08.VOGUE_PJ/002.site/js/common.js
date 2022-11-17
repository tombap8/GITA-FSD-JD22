// 보그PJ 공통JS - common.js

// [현재 페이지명을 알아내어 제어에 활용한다!]
// 페이지명 변수
let pname = location.pathname;
// location.pathname 페이지명이 포함된 전체경로
// split(자를문자열) -> 배열에 담긴다!
pname = pname.split("/");//배열에 담는다
pname = pname[pname.length-1];// 마지막 배열
pname = pname.split(".")[0]; // 페이지이름만 가져옴
// console.log("페이지이름:",pname);

// 제이쿼리 구역 길게쓰기도 있음~!
// $(document).ready(function(){})

$(() => {
    //////////// jQB ///////////////////

    // console.log("로딩완료!");

    /// 부드러운 스크롤 호출!(제이쿼리 아님!)
    startSS();

    ////// 스크롤 이벤트 구역 /////////////
    // 이벤트명 : scroll
    // 이벤트 대상: window
    // 변경대상: #top
    const topA = $("#top");
    // 변경대상: .tbtn
    const tbtn = $(".tbtn");
    // 스크롤위치변수
    let scTop;
    // 마지막 스크룰위치값
    let lastSc = 0;

    // 스크롤 액션 대상 위치값 배열변수
    const scpos = [];
    // 각 등장액션 요소변수
    const scAct = $(".scAct");
    // console.log("등장액션요소 개수:",scAct.length);
    // length는 제이쿼리에도 동일한 이름으로 개수를 가져옴!

    // 윈도우 높이 절반값
    const hw = $(window).height() / 2;

    // 제이쿼리에서 for문대신 쓰는 each() 메서드!!!
    // 요소.each((순번,요소)=>{구현부})

    // 등장액션 클래스 요소의 위치를 배열에 담기! //
    // 조건:
    // 현재스크롤위치(scTop)가
    // 등장액션요소위치(scpos[순번])
    // - 상단영역크기(260)
    // - 윈도우화면높이값절반(hw변수)
    // 보다 커지면...
    // 해당순번의 등장액션요소에 클래스"on"을 추가한다!
    // -> 위의 조건에서 뺀값을 미리셋팅해 준다!
    scAct.each((idx, ele) => {
        scpos[idx] = $(ele).offset().top - 206 - hw;
        // 시작위치보정: 원래위치-상단높이-윈도우절반
        // $(ele) 제이쿼리 선택필수!
        // offset().top -> 맨위에서부터 top위치값
    }); /////////// each 메서드 ///////////

    // 위치배열값 확인하기!
    // console.log("위치배열값:", scpos);

    ///////////////////////////////////////
    //////// 스크롤 이벤트 함수 /////////////
    $(window).scroll(() => {

        // 슬림메뉴와 상단이동버튼 보이기 작동안할 페이지셋팅
        if(
            pname === "login" ||
            pname === "member" ||
            pname === "gallery") {
            return; // 여기서 나감!
        } ////////// if /////////////


        // 스크롤 위치값(this는 window)
        scTop = $(this).scrollTop();
        // scrollTop() 메서드
        // - 세로스크롤 위치값을 리턴하는 메서드
        // console.log(scTop);

        // 1. 슬림메뉴 클래스on적용
        // 기준위치는 스크롤위치 100px이상
        if (scTop >= 100) {
            // 100px이상
            topA.addClass("on");
            // addClass(클래스명) - 클래스넣기

            // 스크롤 방향에 따라 숨겼다보이는 top값 변경
            if (scTop > lastSc) {
                // 숨기기
                // #top의 높이값(동적으로 높이값 설정!)
                let temp = topA.innerHeight();
                // 스크롤 아랫방향
                topA.css({ top: -temp + "px" });
                // console.log(temp);
                // height() - 패딩이 빠진 순수높이값
                // innerHeight() - 패딩포함 내부높이값
            } ///// if ////
            else {
                // 보이기
                // 스크롤 윗방향
                topA.css({ top: "0" });
            } //// else /////
        } ///////// if /////////
        else {
            // 100px 미만
            topA.removeClass("on up");
            // removeClass(클래스명) - 클래스지우기
            // 클래스명에 띄어쓰기로 복수의 클래스 적용가능!
        } //////// else /////////

        ////////////////////////////
        //// 스크롤 방향 알아내기 ///
        // if(scTop > lastSc){
        //     console.log("아랫방향!");
        // }
        // else{
        //     console.log("윗방향!");
        // }
        // 마지막위치 업데이트 필수!
        lastSc = scTop;
        ////////////////////////////

        // 2. TOP버튼 보이기/숨기기
        if (scTop >= 300) {
            // 300이상
            tbtn.addClass("on");
        } ///// if /////
        else {
            // 300미만
            tbtn.removeClass("on");
        } ///// else /////

        // 3. 등장액션 적용하기 ///////
        // 스크롤 등장액션 검사함수 호출!
        // 등장요소 개수만큼 자동으로 돌아주면 호출!
        scAct.each(idx=>scAction(idx));
    }); //////// scroll /////////////////

    /**************************************** 
        함수명: scAction
        기능: 스크롤 등장액션 주기
    ****************************************/
    function scAction(n) {
        // n - 순번값
        // 해당영역일 경우 해당요소에 클래스 "on"넣기
        // 구간은 사이구간으로 설정해야 다음구간과 겹쳐지지 않음!
        if (scTop > scpos[n] && scTop < scpos[n] + 200) {
            scAct.eq(n).addClass("on");
        } ///////////// if /////////////
    } ///////////// scAction함수 /////////////

    ////// TOP버튼 클릭 설정 ///////
    tbtn.click(() => {
        // 스크롤 최상단으로
        // 애니메이션 스크롤 이동
        // 전체스크롤 이동의 대상은?
        // -> html,body 두 최상위 요소를
        // 대상으로 한다! 왜? 그래야 모든
        // 브라우저에서 공통으로 작동함!
        $("html,body").animate(
            {
                scrollTop: "0",
            },
            800,
            "easeOutQuart"
        );
        // scrollTop 속성은 제이쿼리 전용
        // 세로스크롤 위치값을 셋팅할 수 있다!
        // 참고) 가로스크롤은 scrollLeft 임!

        // 부드러운 스크롤 적용으로 스크롤위치값을
        // 갱신해 줘야 이동에 대한 씽크가 맞게 된다!
        // 만약 스크롤 위치값 업데이트를 안하면
        // 위치이동후 부드러운 스크롤위치로 다시이동됨!
        // pos 전역변수에 값넣기
        pos = 0; // 최상단 위치인 0을 넣는다!

    }); /////// click ///////////
}); //////////////// jQB ///////////////////
