// 보그PJ 공통JS - common.js

// 제이쿼리 구역 길게쓰기도 있음~!
// $(document).ready(function(){})

$(() => {
    //////////// jQB ///////////////////

    console.log("로딩완료!");

    ////// 스크롤 이벤트 구역 /////////////
    // 이벤트명 : scroll
    // 이벤트 대상: window
    // 변경대상: #top
    const topA = $("#top");
    // 스크롤위치변수
    let scTop;
    // 마지막 스크룰위치값
    let lastSc = 0;

    $(window).scroll(() => {
        // 스크롤 위치값(this는 window)
        scTop = $(this).scrollTop();
        // scrollTop() 메서드
        // - 세로스크롤 위치값을 리턴하는 메서드
        // console.log(scTop);

        // 1. 슬림메뉴 클래스on적용
        // 기준위치는 스크롤위치 100px이상
        if(scTop >= 100){ // 100px이상
            topA.addClass("on");
            // addClass(클래스명) - 클래스넣기

            // 스크롤 방향에 따라 .up추가/제거
            if(scTop > lastSc){ // 스크롤 아랫방향
                topA.removeClass("up");
            } ///// if ////
            else{ // 스크롤 윗방향
                topA.addClass("up");
            } //// else /////
        } ///////// if /////////
        else{ // 100px 미만
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


    }); //////// scroll /////////////////
}); //////////////// jQB ///////////////////
