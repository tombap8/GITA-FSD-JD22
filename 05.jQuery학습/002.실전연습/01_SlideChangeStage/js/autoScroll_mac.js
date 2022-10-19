///////////////////////////////////////
/////// 원 페이지 자동 스크롤 JS /////////
///////////////////////////////////////


///// 전역변수구역 /////////////////////////
var pno = 0; /// 현재페이지번호
const totnum = 7; // 전체 페이지수
//-> const 는 상수(변경불가) constant에서 나온말
var psts = 0; // 광스크롤막기(0-허용,1-불허용)
//////////////////////////////////////////


////// jQB /////////////////////////
$(function () {
    /// 페이지 새로 고칠때 맨위로 가게하기(브라우저 캐쉬가 잘 안지워져서 쓰는 것임!) 
    setTimeout(function () {
        $(".wrap").animate({
            scrollTop: "0px"
        }, 10); /// animate ////
    }, 500); //// 타임아웃 ////////
    /*
    [ 자동스크롤 구현! ]
    
    1. 기능: 스크롤휠을 위나 아래로 작동 시킬때 페이지가 위나 아래로 자동으로 애니메이션 되는 기능
    
    2. 마우스를 움직여서 스크롤할때 발생하는 이벤트는?
        - mousewheel (오리지널 이벤트)
        - wheel (신규이벤트-벤더사 웹표준이 아직안됌!)
        - DOMMouseScroll - 파이어폭스 전용 스크롤휠 이벤트
        -> 결론적으로 mousewheel 이벤트와 DOMMouseScroll 이벤트를 동시에 사용함!
        
    3. 마우스휠 이벤트와 함수를 연결하는 방법:
    - on(이벤트명,함수)
    (참고로 bind 메서드는 3버전에서는 더 이상 지원안함!)
    
    4. 스크롤휠 이벤트 대상: document 에 보통 적용하지만
    최근 기술변경에 의해서 document,window,body 3가지 중요객체에는 스크롤 휠 막기 등 기본기능 막기가 허용되지 않는다.
    따라서 내부에 body같은 용도의 요소를 하나더 만들어서 사용한다!
    
    on()메서드에 이벤트를 여러개 쓰려면 띄어쓰기로 표기!
    - 파이어폭스용 이벤트를 하나 더 추가해서 씀!
    */

    /*////////////////////////////////////////
        함수명:chkFn
        기능:이벤트발생체크 함수
    */ ////////////////////////////////////////
    var scsts = 0; //스크롤상태변수(0-스크롤아님,1-스크롤중)
    var cBack; //타임아웃변수
    var chkFn = function () {
        clearTimeout(cBack); //타임아웃지우기!
        // 매번지워야 최종 하나만 남음!
        cBack = setTimeout(function () {
            scsts = 0; //스크롤상태값 변경!(끝났으니 해제!)
            console.log("마지막상태:" + scsts);
        }, 100); //// 타임아웃 //////
        console.log("중간상태:" + scsts);
    }; ///////////// chkFn 함수 //////////////
    //////////////////////////////////////////
    //////////////////////////////////////////


    $(document).on("mousewheel DOMMouseScroll", function (e) {
        // e - 발생이벤트에 관련된 메서드를 사용
        //console.log("스크롤중~!");
        // 1. 기본 스크롤 기능 없애기
        //e.preventDefault();

        // 스크롤상태체크 함수호출!
        chkFn();


        // 광스크롤막기 ////////////////////////
        if (psts === 1 || scsts === 1) return true; //돌아가!
        psts = 1; //잠금설정
        scsts = 1; //스크롤상태 잠금
        setTimeout(function () {
            psts = 0; //잠금해제
        }, 800); ////////////////////////////////////



        // 2. 마우스휠 방향 알아내기
        e = window.event || e;
        // 이벤트 전달값이 window관련 이벤트로 전달될 경우를 분리
        // 이벤트의 처리가 브라우저별로 상이할 수 있음에 대비
        // 변수 = 1경우 || 2경우; 
        // 1경우와 2경우 중 true인 값이 변수에 할당됨!

        // wheelDelta 란?
        //- ie, chrome용(opera는 detail을 사용)
        //- 마우스 이벤트에 따라 발생하는 이벤트 횟수 및 방향, 
        //  이동거리 등을 리턴해주는 속성
        var delta = e.detail ? e.detail : e.wheelDelta;
        // 변수에 유효한 설정이 할당됨!

        //console.log("휠방향:" + delta);
        // 휠을 내릴때 : - / 휠을 올릴때 : +

        //// 파이어폭스일때 델타 방향 반대로하기 ///
        // JS의 test() 내장함수를 이용하여
        // navigator.userAgent - 현재브라우저 정보를 읽어서
        // "Firefox"라는 정보가 있으면 test() 내장함수가
        // true 값을 리턴함. 그래서 if문 안으로 들어감!
        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -delta;
        } ///////// 파폭용 방향뒤집기 /////////////
        //console.log("브라우저정보:" + navigator.userAgent);



        // 3. 마우스 휠 방향에 따라 페이지번호 증감!
        if (delta < 0) { // 페이지번호 증가
            pno++;
            if (pno === totnum) pno = totnum - 1;
            // 한계수지정(끝페이지고정!)
        } //// if //////////////////
        else { // 페이지번호 감소
            pno--;
            if (pno < 0) pno = 0;
            // 한계수지정(첫페이지고정!)
        } //// else ///////////////

        //console.log("페이지번호:" + pno);


        // 전역변수변경 후 메뉴변경하기 함수호출
        chgMenu();


        // 4. 이동할 페이지 위치값 알아내기!
        // .page 인 것의 순서로 위치를 파악함!
        var pgpos = $(".page").eq(pno).offset().top;
        //console.log("이동위치:" + pgpos);

        // 5. 실제이동위치로 스크롤 애니메이션 이동하기
        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 800, "easeInOutQuint"); /// animate //////

    }); ////// mousewheel 이벤트함수 //////////////
    ////////////////////////////////////////////



    // GNB a링크를 클릭하면 해당 페이지위치로 이동 애니메이션
    // 이벤트 대상 : .gnb a
    $(".gnb a, .bnav a").click(function (e) {
        // 전달변수 e는 이벤트관련 값을 내부로 전달함!
        e.preventDefault();
        // preventDefault()는 기본 기능을 막아줌
        // a 링크에 사용하면 이동기능이 발생하지 않음!  

        /// 클릭된 메뉴의 순번을 전역 페이지변수 pno에 넣기!
        var idx = $(this).parent().index();
        //console.log("li요소순번:" + idx);
        // 전역 페이지번호변수에 넣기
        pno = idx;

        // 전역변수변경 후 메뉴변경하기 함수호출
        chgMenu();


        // 1. a의 href 값 가져오기
        // this 는 클릭된 a요소 자신
        // attr(속성명) - 속성의 값을 가져옴
        // JS의 getAttribute(속성명) 과 같은 기능의 메서드
        var pid = $(this).attr("href");
        //console.log("이동id:" + pid);

        // 2. 이동할 위치의 아이디 top값을 구함
        var pgpos = $(pid).offset().top;
        // offset() 메서드는 요소의 기본셋팅 정보를 리턴함
        // - top,left,width, height 등의 값을 알 수 있음

        //console.log("위치값:" + pgpos);

        // 3. 스크롤에 애니메이션을 설정하여 해당위치로 이동
        // scrollTop 속성은 세로스크롤 위치값
        // stop()은 애니메이션 큐를 지움!
        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 800, "easeInOutQuint"); /// animate //////

        // 이징을 설정하여 자연스런운 이동 애니메이션 연출!
        // 구글에 "easing"을 검색하여 
        //"Easing Functions Cheat Sheet"를 클릭
        // 해당 이징이름을 복사하여 animate 이징순서에 넣는다!
        // 중요: 이징을 사용하려면 jQuery UI를 불어와야함!

    }); //////// click /////////////
    ////////////////////////////////

}); /////////// jQB ///////////////////
//////////////////////////////////////
//////////////////////////////////////


/*////////////////////////////////////////
    함수명: chgMenu
    기능:메뉴 선택 변경하기
*/ ////////////////////////////////////////
function chgMenu() {
    // GNB 메뉴 선택 li에 class="on"넣기
    $(".gnb li").eq(pno).addClass("on")
        .siblings().removeClass("on");
    // addClass(클래스명) - 선택요소에 class넣기
    // removeClass(클래스명) - 선택요소에 class 지우기
    // siblings() - 다른 형제 요소들 선택

    // 블릿 메뉴 선택 li에 class="on"넣기
    $(".bnav li").eq(pno).addClass("on")
        .siblings().removeClass("on");
} ///////////// chgMenu 함수 //////////////
//////////////////////////////////////////
//////////////////////////////////////////
