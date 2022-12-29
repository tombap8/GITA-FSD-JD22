// 파일럿 PJ 메인 JS - main.js

// 배너순번
let bseq = 0;


$(function () { /// jQB ////////////////////////


    // 메뉴 a요소 기본이동 막기!
    $(".gnb a,.indic a").click(function (e) {
        e.preventDefault();
    }); ///////////// click ////////////////

    //// GNB메뉴 클릭시 해당 페이지 위치로 이동 애니메이션
    // 이벤트 대상: .gnb li + .indic li
    // 변경 대상: html,body
    $(".gnb li,.indic li").click(function (e) {

        ////// 광스크롤막기 /////////////
        if (psts) return; //돌아가!
        psts = 1; //불허용상태변경!
        setTimeout(() => {
            psts = 0;
        }, 1200);
        // 1.2초애니시간후 허용상태변경 //

        // 0. 클릭된 li순번 구해오기
        let idx = $(this).index();
        //console.log("순번:" + idx);


        // 1. 하위a요소의 href값 읽어오기
        // let idnm = $("a", this).attr("href");
        // //console.log("href값:" + idnm);

        // 2. 아이디값에 해당하위 top값 위치구하기
        // top값을 구해서 스크롤 애니메이션 이동에 사용함!
        // let pos = $(idnm).offset().top;
        // offset() 메서드 : 요소의 기본 셋팅 정보를 리턴함
        // - top,left,width,height 등 을 알수 있다!

        // 아이디요소의 위치값을 구해서 이동하면 되지만
        // 최신 제이쿼리 라이브러리가 위치값을 잘못 구해오는
        // 버그가 있으므로 페이지 높이를 기준해서 위치이동을 한다!

        ////////////////////////////////////////////////////
        // 새로운 페이지 위치값 : 윈도우 높이값 * 페이지순번 //
        let pos = $(window).height() * idx;
        //console.log("위치값:" + pos);
        ///////////////////////////////////////////////////

        // 3. 스크롤 애니메이션으로 페이지 이동하기
        // 세로스크롤 이동속성: scrollTop
        // 참고: 가로스크롤 이동속성: scrollLeft
        // 스크롤 이동대상: html,body
        // -> 범용브라우저에서 사용하는 스크롤대상
        $("html,body").animate({
            scrollTop: pos + "px"
        }, 1200, "easeOutQuint"); //// animate /////


        // 4. 클릭된 li요소에 class="on" 넣기
        $(".gnb li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        $(".indic li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        //다른 형제 li들 class="on" 지움

        // 6. li순번과 pno와 일치하기! /////////////////////
        pno = idx;
        //console.log("페이지번호:" + pno);

        // 7. 페이지 이동과 동시에 showEle함수를 호출! 등장액션!
        showEle();

    }); ///////////// click ///////////////


    // 배너블릿 //////////////////
    let bindic = $(".bindic li");

    ///// 배너순번 블릿 변경함수 /////
    let chgIndic = function () {
        bindic.eq(bseq).addClass("on")
            .siblings().removeClass("on");
    }; /////////// chgIndic ///////////////

    ///////////////////////////////////////
    ////// 각 배너 등장 타이틀 셋팅 /////////
    ///////////////////////////////////////
    let bantxt = {
        "ban1": "Men's Season<br>Collection",
        "ban2": "2021 Special<br>Collection",
        "ban3": "GongYoo<br>Collection",
        "ban4": "T-Shirt<br>Collection",
        "ban5": "Shoes<br>Collection",
        "ban6": "Wind Jacket<br>Collection"
    }; ///////////// bantxt객체 //////////////


    /* ///////////////////////////////////////////////////////
    함수명: banTit
    기능: 각 배너 슬라이드에 도착 후 글자 등장 애니메이션하기
    호출: 배너이동후 콜백함수로 호출함
    */ ///////////////////////////////////////////////////////
    let banTit = function () {

        /// 슬라이드 li요소 -> 매번 li의 순서가 바뀜(새로읽어야함!)
        let sld = $(".slide li");

        // 1. 화면에 보이는 배너는 항상 도착후엔 두번째 슬라이드임!
        // 그래서 두번째 슬라이드의 class명을 읽어온다!
        // 왜냐하면 배너의 class명으로 객체에 배너타이틀을 셋팅함!
        let cls = sld.eq(1).attr("class");

        // 2. 클래스명으로 배너타이틀 객체값 읽어오기
        let tit = bantxt[cls]
        // console.log("배너타이틀:"+tit);

        // 배너에 h2요소 넣기전 지우기
        $(".btit").remove();

        // 3. h2태그를 배너li에 삽입한다!
        sld.eq(1).append('<h2 class="btit"></h2>');

        // 화면구성상 왼쪽과 오른쪽으로 글자가 위치해야함
        // ban2, ban3은 오른쪽위치임
        let lval = "30%";
        if (cls === "ban2" || cls === "ban3") lval = "70%";

        // 4. h2태그에 배너 타이틀을 html로 넣는다!
        $(".btit").html(tit)
            // 5. 배너 타이틀 박스를 디자인한다!
            .css({
                position: "absolute",
                top: "55%", // 처음에 약간 아래쪽 위치
                left: lval, // 배너에 따라 다른 값
                transform: "translate(-50%,-50%)",
                font: "bold 4.5vmax Verdana",
                color: "#fff",
                textShadow: "1px 1px 3px #777",
                whiteSpace: "nowrap",
                opacity: 0 // 처음에 투명
            }) //////// css //////////
            // 6. 아래서 위로 올라오며 투명도 복원애니
            .animate({
                top: "50%",
                opacity: 1
            }, 1000, "easeInOutQuart");


    }; ////////// banTit 함수 /////////////////////////////////
    //////////////////////////////////////////////////////////

    // banTit함수 최초호출!
    $(window).on("load", banTit);

    //////////////////////////////////////
    /// 배너 드래그 이동하기 ///////////////
    /// 대상: .slide 
    let slide = $(".slide");
    /// 사용 메서드: draggable() -> 제이쿼리UI
    slide.draggable({
        axis: "x" // x축고정
    }); ///// draggable ///////////

    ////////////////////////////////////////////
    /////// 배너이동 함수 : goSlide /////////////
    ////////////////////////////////////////////
    let goSlide = function (dir) {

        // 매번 새로 화면 width구하기
        winW = $(window).width();

        // dir-1 왼쪽이동, dir-0 오른쪽이동
        if (dir) { // 왼쪽이동
            slide.stop().animate({
                    left: -winW * 2 + "px"
                }, 600, "easeOutQuint",
                function () { // 이동 후 실행
                    // 맨앞 슬라이드 맨뒤로 이동!
                    $(this).append($(this).find("li").first())
                        // css left값을 -100%값 즉 -winW로 복귀!
                        .css({
                            left: -winW + "px"
                        }); //////// css ///////

                    //커버숨기기
                    cover.hide();

                    //배너타이틀등장 함수호출!
                    banTit();

                }); //////// animate //////////

            // 배너블릿변경하기 //
            bseq++;
            if (bseq === 6) bseq = 0;
            chgIndic();

        } ///////////////// if /////////////////
        else { // 오른쪽이동 ////////////////////
            slide.stop().animate({
                    left: "0px"
                }, 600, "easeOutQuint",
                function () { // 이동 후 실행
                    // 맨뒤 슬라이드 맨앞으로 이동
                    $(this).prepend($("li", this).last())
                        // css left값은 원래값인 -100% 즉, -winW로 복귀!
                        .css({
                            left: -winW + "px"
                        }); ///////// css ////////

                    //커버숨기기
                    cover.hide();

                    //배너타이틀등장 함수호출!
                    banTit();

                }); //////////// animate ///////

            // 배너블릿변경하기 //
            bseq--;
            if (bseq === -1) bseq = 5;
            chgIndic();

        } /////////////// else //////////////////

    }; //////////////// goSlide함수 //////////////

    ///////////////////////////////////////////
    //////// 배너이동 애니메이션 하기 //////////
    ///////////////////////////////////////////
    /// 드래그가 끝난 시점에 대한 이벤트 처리 ///
    // 1. dragstop - 드래그가 끝났을때 발생하는 이벤트
    // 2. touchend - 모바일 기기에서 터치가 끝났을때 발생하는 이벤트
    // -> 터치펀치를 쓸경우 모바일 이벤트로 자동전환하므로 touchend는
    //    사용하지 않는다!
    ///////////////////////////////////////////
    //// 드래그 슬라이드 기능 구현하기 //////////
    // 1. 드래그가 끝난 시점에 각 배너의 width 값의 10%를 기준해서
    //      처음 .slide의 left값이 -100%이므로
    // 2. -110% 보다 작으면 슬라이드를 왼쪽으로 애니메이션 이동한다.
    // 3. -90% 보다 크면 슬라이드를 오른쪽으로 애니메이션 이동한다.
    // 4. -110%와 -90%  사이 범위이면 원래위치인 -100%로 
    //      복귀 애니메이션 이동한다.
    // 단, 실제 left값을 구하면 px단위를 리턴하므로 기준값을
    //      화면의 width px값으로 하면 된다!!!

    // 이벤트 대상: .slide
    // 이벤트 종류: dragstop
    // 사용 메서드: on(이벤트명,함수)
    // 광드래그 막기: .cover요소를 보였다가 이동 애니후 숨기기
    let cover = $(".cover");
    // 화면의 width크기
    let winW = $(window).width();
    //console.log("윈도우width:"+winW);

    slide.on("dragstop", function () {

        // 자동넘김 지우기함수 호출!
        clearAuto();

        // 광드래그 막기 커버보이기
        cover.show();

        // 알아야할 값! -> 슬라이드의 left값!
        let sLeft = $(this).offset().left;
        // offset().left 는 현재 선택요소의 left값 구하기
        //console.log("현재left:"+sLeft);

        // 1. -110% 보다 작으면 슬라이드를 왼쪽으로 애니메이션 이동한다.
        if (sLeft < -winW * 1.1) {

            // 슬라이드 이동함수 호출!(왼쪽이동은 1번)
            goSlide(1);

        } /////////// if //////////////////

        // 2.-90% 보다 크면 슬라이드를 오른쪽으로 애니메이션 이동한다.
        else if (sLeft > -winW * 0.9) {

            // 슬라이드 이동함수 호출!(오른쪽이동은 0번)
            goSlide(0);

        } /////////// else if //////////////////

        // 3.-110%와 -90%  사이 범위이면 원래위치인 -100%로 
        //      복귀 애니메이션 이동한다.
        else {

            $(this).stop().animate({
                    left: -winW + "px"
                }, 300, "easeOutQuint",
                function () { /// 애니 후 실행

                    //커버숨기기
                    cover.hide();

                }); //////// animate ///////

        } ///////////// else ////////////////



    }); //////////// dragstop 함수 ////////////////////
    ///////////////////////////////////////////////////

    ///////////////////////////////////////////////////
    ////////// 배너 인터발 호출하여 자동넘기기 //////////
    ///////////////////////////////////////////////////

    // 인터발용변수
    let autoI;
    // 타임아웃용변수
    let autoT;

    ////////// 배너자동호출 함수 ///////////
    let autoSlide = () => {
        // 인터발 호출!
        autoI = setInterval(() => {
            goSlide(1);
        }, 3000);
    }; /////////// autoSlide 함수 ///////////

    // 자동넘김 최초호출
    autoSlide();

    /////// 자동넘김 지우기 함수 /////////////
    // 함수호출위치: 드래그시, 이동버튼 클릭시
    let clearAuto = () => {
        // 인터발 지우기
        clearInterval(autoI);
        // 타임아웃 지우기(쓰나미실행방지!)
        clearTimeout(autoT);
        // 타임아웃설정
        autoT = setTimeout(autoSlide, 5000);
    }; //////////// clearAuto 함수 ///////////





    // 마우스 팔로워 플러그인 적용하기
    // 움직일 대상: .btna
    // 설정범위는 움직일 대상이 포함된 부모요소

    $(".btna").mousefollower();

    $(".btna").hover(
        function () { // over

            // 흰원 나타나기
            $(".inside", this).css({
                transform: "scale(1)"
            }); //// css ////////////

            // 글자 나타나기
            $(".btntit", this).css({
                transform: "translate(-50%, -50%) scale(1)"
            }); /////// css /////////////

        },
        function () { // out

            // 흰원 사라지기
            $(".inside", this).css({
                transform: "scale(0)"
            }); //// css ////////////

            // 글자 사라지기
            $(".btntit", this).css({
                transform: "translate(-50%, -50%) scale(0)"
            }); ////////// css ////////

        }); ///// hover ///////////

    ///////////////////////////////////////////
    /////// 배너이동 버튼 클릭시 배너이동하기 ////
    ///////////////////////////////////////////
    // 대상: .btntit
    $(".btntit").click(function () {

        // 자동넘김 지우기함수 호출!
        clearAuto();

        // 1. 어느쪽버튼인지 구분하기
        let btn = $(this).parent().is(".ar1");
        console.log("이동!" + btn);
        // 2. btn이 true이면 왼쪽버튼 아니면 오른쪽버튼
        if (btn) { // 왼쪽버튼(prev버튼-오른쪽이동)
            // 슬라이드 이동함수 호출(오른쪽은 0번)
            goSlide(0);
        } //////////// if /////////////
        else { // 오른쪽버튼(next버튼-왼쪽이동)
            // 슬라이드 이동함수 호출(왼쪽은 1번)
            goSlide(1);
        } ////////////// else /////////

    }); ////////// click //////////////////////



    if(!mob){ /// 모바일이 아닐때 실행 ///
        //// 액숀 초기화 ///////////////////////
        // 대상: .txtc h2 + .imgc
        // 변경내용: transform: rotate(45deg) + opacity: 0
        $(".txtc h2, .imgc").css({
            transform: "rotate(15deg) translateY(100px)",
            transformOrigin: "left top", //축변경
            opacity: 0
        }); /////////// css ///////////
    }

}); ///////////// jQB ////////////////////////


/////////////////////////////////////////////
////// 페이지 등장액션 함수 //////////////////
/////////////////////////////////////////////
function showEle() {

    // 현재 페이지번호에 맞는 액션구현!
    // pno = 1,2,3만 액션이 있음
    if (pno > 0 && pno < 4) {
        // console.log("액숀!"+pno);
        $(".page").eq(pno)
            .find(".txtc h2, .imgc").css({
                transform: "rotate(0deg) translateY(0px)",
                opacity: 1,
                transition: "1s ease-out .3s"
            }); /////////// css ///////////

        // 글자만 트랜지션 지연시간주기
        $(".page").eq(pno)
            .find(".txtc h2").css({
                transitionDelay: ".9s"
            }); /////////// css ///////////

        // 글자만 트랜지션 지연시간주기
        $(".page").eq(pno)
            .find(".txtc h2.tw").css({
                transitionDelay: "1.2s"
            }); /////////// css ///////////

    } /////////// if문 ////////////////

} ////////////// showEle 함수 ///////////////
/////////////////////////////////////////////