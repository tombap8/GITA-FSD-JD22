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
    $(document).on('mousewheel wheel', e => {

        // e.preventDefault();// 에러발생!

        //// 1.광스크롤 막기 ////
        if (prot_sc) return;
        prot_sc = 1;
        setTimeout(() =>
            prot_sc = 0, dur_sc);
        ///////////////////////

        console.log('휠중~');

        // e로 전달되는 이벤트 변수 처리하기
        e = window.event || e;
        // window.event (오리지널 이벤트)가 유효할 경우 할당!

        // 2. 방향에 따른 페이지번호 증감
        // 방향은 델타값사용!
        let delta = e.wheelDelta || e.detail;
        // e.wheelDelta 일반 브라우저용 방향정보
        // e.detail 은 파이어폭스용 방향정보
        // 변수 = 속성값1 || 속성값2;
        // 둘 중 유효한 값이 변수에 할당됨!

        console.log('방향:', delta);

        // 음수명 아랫방향 : 다음페이지
        if (delta < 0) {
            pno++;
            // 한계수에서 끝번호 고정
            if (pno === totnum) pno = totnum - 1;
        }

        // 양수면 윗방향 : 이전페이지
        else {
            pno--;
            // 한계수에서 끝번호 고정
            if (pno === -1) pno = 0;

        }



        // 3. 스크롤 애니메이션 : 페이지번호만큼 배수로 이동함!
        $('html,body').animate({
            scrollTop: $(window).height() * pno + "px"
        }, dur_sc, easing_sc);

        // 4. GNB 메뉴 + 사이드 표시자 위치 업데이트하기
        $(".gnb li").eq(pno).addClass("on")
        .siblings().removeClass("on");
        $(".indic li").eq(pno).addClass("on")
        .siblings().removeClass("on");

    }); //////////// mousewheel ///////////////////
    ///////////////////////////////////////////////


    /// GNb 클릭시 위치이동 하기 ////////
    $(".gnb a, .indic a").click(function(e){
        
        e.preventDefault();

        // 1. 부모 li순번
        let idx = $(this).parent().index();
        console.log(idx);

        // 2. 순번을 pno에 일치
        pno = idx;

        // 3. 페이지이동하기
        $('html,body').animate({
            scrollTop: $(window).height() * pno + "px"
        }, dur_sc, easing_sc);

        // 4. GNB 메뉴 + 사이드 표시자 위치 업데이트하기
        $(".gnb li").eq(pno).addClass("on")
        .siblings().removeClass("on");
        $(".indic li").eq(pno).addClass("on")
        .siblings().removeClass("on");


    }); /////////// click /////////////



}); //////////////////// jQB ////////////////////////