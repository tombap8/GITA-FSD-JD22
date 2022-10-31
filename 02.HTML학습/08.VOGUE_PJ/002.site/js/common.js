// 보그PJ 공통JS - common.js

// 제이쿼리 구역 길게쓰기도 있음~!
// $(document).ready(function(){})

$(() => {
    //////////// jQB ///////////////////

    console.log("로딩완료!");

    ////// 스크롤 이벤트 구역 /////////////
    // 이벤트명 : scroll
    // 이벤트 대상: window
    // 스크롤위치변수
    let scTop;

    $(window).scroll(() => {
        // 스크롤 위치값(this는 window)
        scTop = $(this).scrollTop();
        // scrollTop() 메서드
        // - 세로스크롤 위치값을 리턴하는 메서드
        console.log(scTop);

        // 1. 슬림메뉴 클래스on적용
        // 기준위치는 스크롤위치 100px이상
        if(scTop >= 100){ // 100px이상
            $().addClass("on");
            // addClass(클래스명) - 클래스넣기
        } ///////// if /////////
        else{ // 100px 미만
            $().removeClass("on");
            // removeClass(클래스명) - 클래스지우기
        } //////// else /////////

    }); //////// scroll /////////////////
}); //////////////// jQB ///////////////////
