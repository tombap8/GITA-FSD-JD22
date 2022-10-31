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

        // 
    }); //////// scroll /////////////////
}); //////////////// jQB ///////////////////
