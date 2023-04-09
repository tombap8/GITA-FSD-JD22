// 보그 코리아 공통 기능 JS - common.js //

/// 모바일여부 구분 상태변수
let mob = 0; // 1-모바일, 0-모바일아님

// 모바일상태값 업데이트 함수
let reFn = () => {
    /// 처음에 화면가로사이즈로 상태값 업데이트함!
    if ($(window).width() <= 500){ 
        mob = 1;
        // 화면가로 사이즈가 500px 이하이면 
        // mob값을 1으로 변경!
        $("#top").removeClass("on");
        // 상단영역 변경 클래스 제거!
    }
    else {
        mob = 0;
        // 그 밖의 경우엔 mob를 0으로!
    }
    console.log("모바일상태:"+mob);
}; ////// reFn함수 ////////

// 처음 페이지 로딩시 최초 업데이트함수 호출!
reFn();

// 윈도우 사이즈 변경시 업데이트함수 호출!
$(window).resize(reFn);
// resize() 메서드 : 
// 화면크기가 변경될때 발생하는 이벤트와 함수를 연결



$(function () { ////// jQB ////////////////////////
    // 페이지 새로 고침시 스크롤이 중간에 있으면
    // 브라우저 스크롤위치 캐싱(즉, 위치기억)에
    // 의해서 그 위치에 있게 되므로
    // 강제로 위로 보내는 코드를 넣어준다!
    // CSS로 넣어주면 캐싱 덮어써서 소용이 없다!
    // 그래서 animate로 넣어줌
    $("html,body").animate({
        scrollTop: "0px"
    }, 100);



    /* 
        [ 스크롤 이벤트 처리구역 설정하기 ]

        1. 스크롤이벤트는 스크롤바가 움직일때 발생한다.
        (마우스휠 이벤트와 다름!)
        2. 제이쿼리에서 scroll() 메서드로 구현함
        3. 스크롤 위치값은 scrollTop() 메서드로 알아낸다!
     */

    // 스크롤위치변수
    let scTop;
    // 스크롤실행상태변수(상단영역)
    let scSts = 1; // 실행전1, 실행후0
    // 스크롤실행상태변수2(탑버튼)
    let scSts2 = 1; // 실행전1, 실행후0
    // 상단영역요소
    let tm = $("#top");
    // 위로이동버튼 요소
    let tbtn = $(".tbtn");


    // 전체 스크롤의 대상은 화면이므로 window객체를 사용한다!
    $(window).scroll(function () {

        // 1. 전체 스크롤 위치값 알아내기
        // (1) scrollTop() 메서드 : 세로스크롤 위치값
        // (2) scrollLeft() 메서드 : 가로스크롤 위치값

        scTop = $(this).scrollTop();
        console.log("스위:" + scTop);

        // 1. 상단이동버튼 보이기 숨기기 ///
        // 대상: .tbtn -> tbtn변수에 할당!
        // 기준위치: 300px 스크롤위치
        if (scTop >= 300 && scSts2 === 1) {
            scSts2 = 0; //한번만!
            console.log("탑버튼보여!");
            tbtn.fadeIn(300); //쓱~보여
        } ///////// if ///////////////////
        else if (scTop < 300 && scSts2 === 0) {
            scSts2 = 1; //한번만
            console.log("탑버튼숨겨!");
            tbtn.fadeOut(300); //쓱~숨겨
        } ///////// else if //////////////


        // 모바일일때 돌아가! ////////
        if (mob) return;
        // mob===1 일때 true처리된다!
        // 아랫쪽 코드가 실행안됨!
        // 위에 있는 top버튼 보이기/숨기기는 실행됨!
        // 모바일에서도!

        // 2. 상단영역(#top)이 스크롤위치값 100px이상일때
        // -> #top에 .on을 넣어서 상단영역 디자인 변경하기
        // 대상: #top -> 변수 tm에 할당!
        if (scTop >= 100 && scSts === 1) { // 100이상
            scSts = 0; //한번밖에 못들어옴!
            console.log("실행1");
            tm.addClass("on");
        } ////////// if //////////
        else if (scTop < 100 && scSts === 0) { // 100미만
            scSts = 1; //한번밖에 못들어옴!
            console.log("실행2");
            tm.removeClass("on");
        } //////// else /////////////




    }); //////////// scroll //////////////////////
    //////////////////////////////////////////////

    /// 탑버튼 이동 구현하기 /////
    // 대상: .tbtn === tbtn변수
    tbtn.click(function (e) { // e-이벤트전달변수
        // 기본이동막기
        e.preventDefault();

        // 맨위로 이동하기
        // 변경대상: html,body 두가지모두!
        $("html,body").animate({
            scrollTop: "0px"
        }, 1000, "easeInOutQuad");
    }); ///////// click ////////////


    ////////// 모바일 코드 ////////////////////////

    // 햄버거버튼 클릭시 메뉴 보이기/숨기기 //
    // 이벤트대상: .hbtn - 햄버거버튼
    // 변경대상: #mobx - 모바일메뉴박스
    $(".hbtn").click(function(e){

        // 기본이동막기
        e.preventDefault();

        // 모바일 메뉴 슬라이드 애니메이션
        $("#mobx").slideToggle(600,"easeInOutQuart");
        $("#top").toggleClass("hv");
        // toggleClass(클래스명)
        // 해당클래스가 없으면 넣고 있으면 뺌!
        // .hv 클래스는 이미 #top의 높이값을
        // 100vh로 설정한 클래스임!

    }); ////////// click ///////////


    /// 검색버튼 클릭시 검색창 보이기/숨기기 ///
    // 이벤트대상: .sbtn - 검색버튼
    // 변경대상: .mos - 검색창박스
    $(".sbtn").click(function(e){

        // 기본이동막기
        e.preventDefault();

        // 검색창 보이기/숨기기 : slideToggle()
        $(".mos").slideToggle(300,"easeOutQuint");

    }); ////////// click ///////////////////


    
    // slideToggle(시간,이징,함수)
    // -> display:none이면 slideDown
    // 아니면 slideUp 을 실행함
    // 토글(toggle)은 두가지 기능 겸하는 것을 말함

    // 확장:
    // toggle(시간,이징,함수) -> show/hide전환
    // fadeToggle(시간,이징,함수) -> fadeIn/fadeOut전환







}); /////////////// jQB /////////////////////////