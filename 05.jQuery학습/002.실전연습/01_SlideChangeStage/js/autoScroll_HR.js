// 자동 스크롤 기능 - autoScroll.js

///// 전역변수 구역 ///////////////
// 1. 현재 페이지 번호
let pno = 0;
// 2. 전체 페이지수
const totnum = 7;
// 3. 광스크롤 상태변수
let prot_sc = 0; //0-허용,1-불허용
// 4. 스크롤 애니메이션 시간
const dur_sc = 700;
// 광스크롤 금지시간 === 스크롤 애니메이션 시간
// 5. 스크롤 이징
const easing_sc = "easeOutQuint";



$(() => { //////////////// jQB /////////////////////////

    console.log("로딩완료!");

    /// 새로고침 시 스크롤위치 캐싱이 있으므로
    // 강제 상단 이동을 코딩하여 제어한다!
    $("html,body").stop().animate({
        scrollLeft: "0"
    }, 100);

    /************************************************** 
        [ 자동스크롤 구현! ]

        1. 기능: 마우스 휠 위나 아래로 작동시킬때
        페이지가 위나 아래로 자동으로 애니메이션 되는 기능

        2. 이벤트: 마우스휠을 움직일때 발생하는 이벤트는?
        - mousewheel (오리지널 이벤트) -> 파이어폭스 지원안함!
        - wheel (신규 이벤트 - 벤더사의 웹표준이 아직아님!)
            -> 엣지, 사파리 지원안함!
        - DOMMouseScroll (파이어폭스 전용 이벤트)
        -> 결론적으로 모두 한꺼번에 지원하는 이벤트가 없으므로
        mousewheel + DOMMouseScroll 2개를 같이 사용할 것임!
        (mousewheel + wheel -> 이렇게 할수 도 있음^^)

        3.  마우스 휠 이벤트와 함수를 함수를 연결하는 방법
        - on(이벤트명,함수)
        - on 메서드로 어떤 이벤트와도 함수를 연결할 수 있다!
        -> 이벤트명을 띄어쓰기로 여러개 사용할 수 있음!
        (참고로 bind(이벤트명,함수) 메서드도 있었지만
        지금은 제이쿼리 3.몇 버전에서는 지원안함!)

        4. 마우스 휠 이벤트 대상: 보통 document 에 적용함!

        ->>>>>> 중요한 업데이트 유의사항 !!!!!
        document, window, body 객체는 이벤트 막기를 할 수 없다!
        - 2019년도에 위의 세가지 중요객체에 대하여 기본막기를
        할수 없도록 브라우저 소스가 업데이트 되었는데...
        이유는? 모바일에서 에러가 발생하는 주요원인으로 지목됨
        본 3가지 중요객체에 대하여 e.preventDefault() 또는
        return false 를 사용한 기능막기를 못하도록 하였다!

        예) 안되는 케이스
        $(document).on("click",function(e){
            e.preventDefault(); -> 에러발생!!!
        });
        $(window).on("mousewheel",function(e){
            return false -> 에러발생!!!
        });
        $("body").on("mouseover",function(e){
            e.preventDefault(); -> 에러발생!!!
        });

        -> 에러를 우회하는 방법은?
        (1) 방법1:
        window, document, body대신 내부에 전체를 싸는 요소를
        부모박스로 만들고 이것을 대상 사용하여 막기를 설정함!
        (2) 방법2:
        스크롤바를 보일 필요가 없다면
        막기를 하지 않고 overflow:hidden 처리하여
        스크롤 자체가 되지 않게 셋팅후 코딩한다!
        (3) 방법3:
        window, document,body에 passive모드를 설정하는
        방법 -> passive:false 로 설정함!

    **************************************************/

    /////////// 자동스크롤 구현 ////////////////////
    $(document).on("mousewheel DOMMouseScroll",
        function (e) {

            //////////// 광스크롤 막기 ////////////
            if (prot_sc) return;
            prot_sc = 1; // 막기
            setTimeout(() => prot_sc = 0, dur_sc);
            //////////////////////////////////////


            // e.preventDefault();

            // console.log("스크롤링~~~");

            // e 변수로 전달되는 이벤트변수 처리하기
            e = window.event || e;
            // 변수에 할당한 OR로 쓴 뒤의 2가지 값중
            // 먼저 true인 값이 변수에 할당된다!
            // 변수 = 변수1 || 변수2
            // window.event 는 오리지널 윈도우객체 이벤트
            // 이벤트 전달시 에러를 막기위한 보완코드임!

            /**************************************** 
                1. 마우스 휠 방향 알아내기!
            ****************************************/
            // -> 페이지를 위로 갈지 아래로 갈지 결정하기위함!
            // 휠델타값으로 방향을 알아낸다!!
            // e.wheelDelta 는 일반 브라우저용 방향정보
            // e.detail은 파이어폭스용 방향정보
            let delta = e.wheelDelta || e.detail;
            // 변수 = 속성값1 || 속성값2
            // -> 두가지 속성중 undefained 가 아닌값 즉 true처리가
            // 되는 값이 할당된다!!!
            //    console.log("휠델타값:",delta);

            /****************************************** 
                1.5. 파이어폭스 방향 반대로 전환하기!
                -> 현재브라우저가 파이어폭스인지 어떻게 알지?
                navigator.userAgent 이 값을 찍으면
                브라우저 정보가 표시됨
                -> 브라우저 정보에 "firerfox"라는 문자가
                있으면 파이어폭스 브라우저다!
                -> 정규식으로 문자 있는 여부 구분하기
                /문자/i -> 대소문자 관계없이 찾으라!
                -> 정규식.test(값) -> 값에 정규식문자가 있으면 true

                -> /firefox/i.text(navigator.userAgent)
                : 브라우저 정보에 "firefox"문자가 있으면 true

            ******************************************/
            //    console.log("브라우저정보:",navigator.userAgent);

            // 파이어폭스 브라우저면 delta의 부모가 반대가 됨!
            if (/firefox/i.test(navigator.userAgent)) delta = -delta;




            /******************************************** 
                 2. 방향에 따른 페이지 번호 증감하기!
            ********************************************/
            if (delta < 0) { // -120 아랫방향
                pno++;
                if (pno === totnum) pno = totnum - 1;
                // 한계값 끝번호 고정!
            } ////////////// if //////////////
            else {
                pno--;
                if (pno < 0) pno = 0;
                // 한계값 첫번호 고정!
            } /////////// else ////////////////

            console.log("페이지번호:", pno);

            /*********************************************** 
              3. 윈도우 높이값에 페이지번호를 곱하여 이동하기
            ***********************************************/
            // 이동기준: 가로스크롤바 -> scrollLeft
            // 이동할 위치 -> 윈도우 가로값*페이지번호
            let pgpos = $(window).width() * pno;

            $("html,body").stop().animate({
                scrollLeft: pgpos + "px"
            }, dur_sc, easing_sc);

            /******************************************** 
                4. 현재 메뉴 표시하기 : GNB + 사이드표시자
            ********************************************/
            $(".gnb li").eq(pno).addClass("on")
                .siblings().removeClass("on");
            $(".indic li").eq(pno).addClass("on")
                .siblings().removeClass("on");


        }); ////////////// mousewheel /////////////////

    ///// 공통 a요소 기본이동막기 ///////
    $("a").click(function (e) {
        // 기본이동막기
        e.preventDefault();
    }); ///////// click ////////////////

    /////// 메뉴 클릭시 스크롤 이동 애니메이션 /////
    // 대상: .gnb li + .indic li
    $(".gnb li, .indic li").click(function (e) {

        // 1. 순번 알아내기 : li순번
        let idx = $(this).index();
        console.log("메뉴순번:", idx);

        // 2. idx순번을 pno 전역 페이지번호에 넣기!
        pno = idx;

        // 3. 페이지 이동하기
        // 이동기준: 가로스크롤바 -> scrollLeft
        // 이동할 위치 -> 윈도우 가로값*페이지번호
        let pgpos = $(window).width() * pno;

        $("html,body").stop().animate({
            scrollLeft: pgpos + "px"
        }, dur_sc, easing_sc);

        // 4. 현재 페이지 메뉴 클래스 on넣기!
        // GNB메뉴 + 사이드 표시메뉴
        $(".gnb li").eq(pno).addClass("on")
            .siblings().removeClass("on");
        $(".indic li").eq(pno).addClass("on")
            .siblings().removeClass("on");


    }); ///////////// click //////////////





}); //////////////////// jQB ////////////////////////