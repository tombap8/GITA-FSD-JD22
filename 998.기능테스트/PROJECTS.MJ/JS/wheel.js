import { mtc } from "./main.js";
import albnum from "./module/DBconnect.js";
import {
  sm,
  slidegnb,
  topA,
  Cl,
  m2,
  hb,
  m3,
  palt,
  setAlSts,
  alSts,
  BWP,
  scTop,
  setScTop,
  delta,
  setDelta,
} from "./module/variable.js";
// 마우스 휠 (스크롤이벤트 전용 페이지)
$(() => {
  //
  let updateOffset = (ele) => {
    return Math.floor(ele.offset().top);
  };

  const clickSetFn = (ele) => {
    let idx = $(ele).index();
    console.log("클릭위치값:", fval[idx], "/ 순번:", idx);
    $(ele)
      .css({
        height: "50vh",
      })
      .delay(100, () => {
        BWP.animate({ scrollTop: fval[idx] - gap + "px" });
      });

    $(".ttrack", ele)
      .delay(2000)
      .addClass("on")
      .parent()
      .siblings()
      .css({ height: "0vh" })
      .find(".ttrack")
      .removeClass("on");
  }; ////// clickSetFn ///////

  // 앨범 클릭시 위치조정 메서드
  mtc.each(function () {
    // let sec = Math.floor(section.offset().top);

    $(this).click(() => {
      clickSetFn(this);
    });
  });

  let lastSc = 0;

  let tempSts = 0; // 광스크롤 막기

  let fval = [];
  $(".mtrack").each((idx, ele) => {
    fval[idx] = Math.floor($(ele).offset().top);
  });

  // 화면의 50%크기 계산 보정값
  let gap = $(window).height() / 2;

  console.log("초깃값:", fval, "\n갭값:", gap);

  BWP.scroll(function () {
    let scTop = BWP.scrollTop();
    console.log("스크롤:", scTop);
  });

  BWP.on("mousewheel wheel", function (e) {
    e = window.event || e;
    let delta = e.wheelDelta || e.detail;

    let scTop = BWP.scrollTop();

    // // 1 . 상단 큰 로고 클래스 온 적용 + 줄어들기
    if (scTop >= 100) {
      topA.css({ position: "fixed" });
      topA.find(".top").slideUp();
      topA.find(".lm").slideUp();
      topA.addClass("on");

      // 2. 상단 얇은줄 줄어들고 늘어나기
      if (scTop > lastSc) {
        slidegnb.addClass("up");
        sm.fadeOut();
      } else {
        slidegnb.removeClass("up");
        sm.fadeIn(1500);
      }
    } else {
      topA.css({ position: "relative" });
      topA.find(".top").slideDown();
      topA.find(".lm").slideDown();
      topA.removeClass("on");
    }

    // 상태가 1이면 앨범이 열린상태이므로 스크롤 금지
    if (alSts) {
      //   e.preventDefault();
      // 방향에 따라 이전,다음 전환

      console.log("임시잠금:", tempSts, "/delta:", delta);
      // 광스크롤 막기
      if (tempSts === 1) {
        e.preventDefault();
        return;
      }
      tempSts = 1;
      setTimeout(() => {
        tempSts = 0;
      }, 1000);

      if (delta < 0) {
        let ele = $(".mtrack").filter(".on").parent().next();
        ele.trigger("click");
        ele.clickSetFn(ele);
      } else if (delta > 0) {
        $(".mtrack")
          .filter(".on")
          .parent()
          .prev()
          .css({ height: "50vh" })
          .trigger("click");
      }
    } else {
    }
    lastSc = scTop;
  }); /// 윈도우스크롤 ///
}); // 메인 앨범 트랙 스크롤
