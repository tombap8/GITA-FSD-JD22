// 남자패션페이지 JS - men.js

// 페이지번호(컨텐츠의 위치를 페이지로 생각함!)
let pno = 0;

// 남성 신상품 정보
let sinsang = {
  "m1": "[남성]카모전판프린트 PQ 티셔츠^DMTS7K731-MG^99,000원",
  "m2": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-BK ^89,000원",
  "m3": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-WH ^89,000원",
  "m4": "[남성]부분 스트라이프 PQ 티셔츠^DMTS77731-NY ^99,000원",
  "m5": "[남성]웰딩포인트 트레이닝 하프팬츠^DMTB61731-MD ^89,000원",
  "m6": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-GR ^99,000원",
  "m7": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-KA ^99,000원",
  "m8": "[남성]베이직 솔리드 래쉬가드^DMSW15731-BK ^49,000원",
  "m9": "[남성]남성 루즈핏 슬리브리스^DMSL6C731-MG ^59,000원"
};

$(function () { /// jQB ////////////////////////////

  // 메뉴 a요소 기본이동 막기!
  $(".gnb a,.indic a").click(function (e) {
    e.preventDefault();
  }); ///////////// click ////////////////

  //// GNB메뉴 클릭시 해당 페이지 위치로 이동 애니메이션
  // 이벤트 대상: .gnb li + .indic li
  // 변경 대상: html,body
  $(".gnb li,.indic li").click(function (e) {

    // 클릭시 스크롤 메뉴변경 안되게끔 상태값 변경
    mchg = 1; // 변경금지 상태!!!
    //->스크롤이동 애니후 해제!(mchg=0)

    // 0. 클릭된 li순번 구해오기
    let idx = $(this).index();
    //console.log("순번:" + idx);

    // 1. 하위a요소의 href값 읽어오기
    let idnm = $("a", this).attr("href");
    //console.log("href값:" + idnm);

    // 2. 아이디값에 해당하위 top값 위치구하기
    // top값을 구해서 스크롤 애니메이션 이동에 사용함!
    let pos = $(idnm).offset().top;
    // offset() 메서드 : 요소의 기본 셋팅 정보를 리턴함
    // - top,left,width,height 등 을 알수 있다!

    console.log("위치값:" + pos);


    // 3. 스크롤 애니메이션으로 페이지 이동하기
    // 세로스크롤 이동속성: scrollTop
    // 참고: 가로스크롤 이동속성: scrollLeft
    // 스크롤 이동대상: html,body
    // -> 범용브라우저에서 사용하는 스크롤대상
    $("html,body").animate({
      scrollTop: pos + "px"
    }, 1200, "easeOutQuint", () => { // 애니후
      mchg = 0; //스크롤메뉴변경 허용!
    }); //// animate /////


    // 4. 클릭된 li요소에 class="on" 넣기
    $(".gnb li").eq(idx).addClass("on")
      .siblings().removeClass("on");
    $(".indic li").eq(idx).addClass("on")
      .siblings().removeClass("on");
    //다른 형제 li들 class="on" 지움

    // 6. li순번과 pno와 일치하기! /////////////////////
    pno = idx;
    //console.log("페이지번호:" + pno);

    // 7. 이동위치값을 부드러운 스크롤위치값과 일치하기!
    sc_pos = pos;

    // console.log("부스:"+sc_pos);


  }); ///////////// click ///////////////

  /// 로고 버튼 클릭시 맨위로 가기 ////
  $("#logo a").click(function (e) {
    // 1. 기본이동막기
    e.preventDefault();

    // 2. 맨위로 가기
    $("html,body").animate({
      scrollTop: "0"
    }, 800, "easeOutQuint");

    // 3. 부드러운 스크롤 변수 일치하기
    sc_pos = 0;

  }); ////////// click ///////////////



  /// 부드러운 스크롤 호출!(제이쿼리 아님!)
  startSS();

  /////////////////////////////////////
  // 배너에 스와이퍼 플러그인 적용하기 /// 
  /////////////////////////////////////

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      // disableOnInteraction 
      // - 건드린 후 멈춤 true / 다시 작동은 false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); //////// swiper ///////////////


  /// 스크롤 등장 플러그인 적용 : 스크롤리빌 ////
  $.fn.scrollReveal();


  //// 남자 스페셜 영역에 패럴렉스 플러그인 적용하기 ////
  $("#spec").parallax("50%", 0.5);

  ////////////////////////////////////////////////
  //////////////// 신상품 움직이기 ////////////////
  ////////////////////////////////////////////////
  // 움직일 대상: .flist
  let flist = $(".flist");
  // 위치값변수
  let lpos = 0;
  // 재귀호출상태값 변수
  let cbsts = 1; // 1-호출가능, 0-불가능

  // 신상품 움직이기 함수 ////////////////
  let moveList = () => {

    // 1. 위치값 감소하기 /////
    lpos--;
    // console.log("위치값:"+lpos);

    // 2. 위치값 적용하기 //////
    flist.css({
      left: lpos + "px"
    }); ////// css ////////////

    // 3. 한계값 초기화하기 
    //    + 첫번째 li 맨뒤로 보내기 + left값 0만들기
    if (lpos < -300) {

      // 3-1.한계값 초기화!
      lpos = 0;

      // 3-2.첫번째 li 맨뒤로 보내기
      flist
        .append(flist.find("li").first())
        .css({
          left: "0"
        }); //// css ///

    } /////////// if문 /////////////

    // 4. 재귀호출하기 ///////////
    if (cbsts) setTimeout(moveList, 40);


  }; //////// moveList 함수 /////////////

  // 이동함수 최초호출
  // moveList();

  // .flowbx에 마우스 오버시 멈추기/ 아웃시 다시작동하기
  $(".flowbx").hover(
    function () { // over
      cbsts = 0; // 콜백상태값 0
    },
    function () { // out
      cbsts = 1; // 콜백상태값 1
      moveList(); //함수 재호출!
    }); /////////// hover /////////

  ////////////////////////////////////////////////////////
  ////// 신상품 리스트 li에 마우스 오버시 정보보이기 ////////
  ////////////////////////////////////////////////////////
  // 대상: .flist li
  // 정보구분법: li의 클래스명으로 구분하여 sinsang객체로부터
  //            정보를 가져와서 html을 만들어서 보이게한다!
  ////////////////////////////////////////////////////////
  $(".flist li").hover(
    function () { // over ////////////////////

      // 1. 클래스 명 알아내기
      let cls = $(this).attr("class");

      // 2. 클래스명에 의한 신상정보 가져오기
      let ginfo = sinsang[cls];
      // console.log(ginfo);

      // 3. 상품정보박스 만들고 나타나기
      $(this).append('<div class="ibox"></div>');
      // 상품정보넣기
      $(".ibox").html(ginfo.replace(/\^/g, "<br>"))
        // replace로 기존 특수기호^를 br태그로 모두변경함(정규식)
        .animate({
          top: "105%",
          opacity: 1
        }, 300, "easeOutCirc");

    }, /////////// over //////////////////
    function () { // out ///////////////////
      // .ibox지우기
      $(".ibox").remove();
    }); /////////// hover ///////////////////////////

  /////////// 신상품 li 클릭시 상세페이지 이동하기 //////
  $(".flist li a").click(function (e) {

    // 1. 기본이동 막기
    e.preventDefault();

    // 2. li의 클래스 정보 읽어오기(a요소의 부모)
    let cls = $(this).parent().attr("class");
    console.log("넘길값:" + cls);

    // 3. 상세페이지로 이동하기
    location.href = "men_detail.html?gno=" + cls;

  }); ///////////// click ////////////////////////////

  // 신상최초호출여부
  let nacall = 1; //1-호출전, 0-호출후

  // 윈도우 높이값의 1/3
  let winH = $(window).height() / 3;
  console.log("윈도우높이:" + winH);


  ////////////////////////////////////////////////
  /////// 윈도우 스크롤시 위치값에 따른 액션주기 ////
  ////////////////////////////////////////////////

  // 1. 스크롤위치변수
  let scTop;
  // 2. 페이지 위치변수 /////////////////////////
  let pgPos = []; // 배열변수
  // 3. 페이지 대상 ////////////////////////////
  let pgBox = $(".page");
  // 4. 메뉴변경상태값 //////////////////////////
  let mchg = 0; // 변경허용 0, 변경금지 1
  //////////////////////////////////////////////

  /////////////////////////////////////////////
  //////////// 페이지 위치값 셋팅하기 ///////////
  /////////////////////////////////////////////
  for (let i = 0; i < pgBox.length; i++) {
    pgPos[i] = pgBox.eq(i).offset().top;
    // console.log("페이지위치값:"+pgPos[i]);
  } ///////////// for문 ///////////////////////
  /////////////////////////////////////////////

  //////////////////////////////////////////////
  /////////// 스크롤액션 위치값 보정 /////////////
  //////////////////////////////////////////////
  // 스크롤위치로 등장액션을 할 경우 등장요소가
  // 화면 상단을 통과할때 발생하게 된다
  // 우리가 원하는 것은 화면 중간쯤에서 등장하는 것!
  // 윈도우화면 높이값의 절반 정도의 값을 위치값에서
  // 뺀 것을 시작범위로 설정하기 위해 이를 구하여
  // 변수에 할당한다!!!
  let gap = $(window).height() / 2 + 100;
  // 마지막 액션요소 위치로 인해 약간의 보정이 필요
  console.log("윈도우높이값의 절반: " + gap);
  //////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////// 페이지 영역별 메뉴변경 함수 ///////////
  ///////////////////////////////////////////////
  let chgMenu = function (seq) { // seq - 순번전달

    //////////// 메뉴 클릭시 막기 ////////////
    if (mchg) return; // mchg===1 일때 돌아가!
    /////////////////////////////////////////

    if (scTop > pgPos[seq] - gap && // 시작위치
      scTop < pgPos[seq] + gap // 끝위치
    ) {
      // 해당순번 메뉴에 class="on" 넣기/나머진 빼기
      $(".gnb li").eq(seq).addClass("on")
        .siblings().removeClass("on");
      $(".indic li").eq(seq).addClass("on")
        .siblings().removeClass("on");

    } /////////////////// if ///////////////////////

  }; ////////////////// chgMenu 함수 /////////////////
  ////////////////////////////////////////////////////

  // 탑이동버튼
  let tbtn = $("#tbtn");
  // 탑이동버튼 top값 - 보이는 화면높이의 80%값
  let tbTop = $(window).height() * 0.8;
  console.log("top값:" + tbTop);

  ////////////////////////////////////////////////
  $(window).scroll(function () {
    // 1. 스크롤 위치값
    scTop = $(this).scrollTop();
    // console.log("스위:" + scTop);

    // 2. 스크롤 액션
    // 2-1. 첫페이지 윈도우 높이값의 2/3지점 통과시
    // -> 신상품 리스트 이동함수 최초호출하기!(한번만호출)
    if (scTop > winH * 2 && scTop < winH * 4 && nacall) {
      console.log("신상호출처음!");
      //한번만호출 상태변경
      nacall = 0;

      // 콜백상태 가능상태로 변경
      cbsts = 1;
      // 이동함수 최초호출
      moveList();

    } ////////// if문 신상이동호출 ///////
    else if ((scTop < winH * 2 || scTop > winH * 4) && !nacall) {

      console.log("신상호출멈춤처음!");
      //한번만호출 상태변경
      nacall = 1;

      // 콜백상태값 변경하여 멈추기!
      cbsts = 0; // 콜백상태값 0


    } /////////// else if문 신상이동 멈춤 /////

    // 3. 페이지 해당 메뉴 변경함수 호출하기!
    for (let i = 0; i < pgBox.length; i++) {
      chgMenu(i); //순번전달 함수호출!
    } ///////////// for문 ///////////////////


    // 4. 스크롤바의 위치만큼 
    //    탑이동버튼의 top값 변경하기
    if (scTop > 300) {
      tbtn.fadeIn(300) // 보여라!
        .css({
          top: (tbTop + scTop) + "px"
        });
    } ///// if문 ///////////////////
    else {
      tbtn.fadeOut(300) // 숨겨라!
        .css({
          top: tbTop + "px"
        });
    } ///// else문 /////////////////


  }); /////////////// scroll /////////////////////
  ////////////////////////////////////////////////


  /// 탑버튼 클릭시 맨위로 이동하기 ///
  tbtn.click(function () {

    // 1. 맨위로 애니메이션 이동하기
    $("html,body").animate({
      scrollTop: "0px"
    }, 800, "easeOutQuint");

    // 2. 부드러운 스크롤 전역변수 일치하기!
    sc_pos = 0;

  }); ///////////// click ///////////
  ///////////////////////////////////

}); ///////////// jQB ////////////////////////////