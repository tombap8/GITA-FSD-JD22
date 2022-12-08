/**********  음원사이트 메인 페이지 자바스크립트  **********/
////////////////////////////////////////////
// 상단 import 구역 -------------------------------------
////////////////////////////////////////////
import { LoadFor, Widbb, MuteBtn } from "./module/FUNCTIONS.js";
import {
  ssm,
  mtb,
  Gul,
  GuIA,
  navC,
  Hamli,
  tbt,
  mpp,
  setAlSts,
  hb,
  m3,
  MTC,
  BWP,
  scTop,
  setScTop,
  delta,
  setDelta,
  Cl,
} from "./module/variable.js";
LoadFor();
////////////////////////////////////////////////
// 변수 정리 구역 ------------------------------
export const mtc = $(".mtt1");
const track = $(".track");
const ttrack = $(".ttrack");
const AUDIO = $(".AUDIO");
///////////////////////////////////////////////////////////
//-------------------------------------------------------//
// JQB ////////////////////////////////////////////////////
$(() => {
  // 처음클릭상태
  // 앨범박스

  let scTop = BWP.scrollTop();
  // 메인 트랙 커버박스 클릭 이벤트 //
  // mtc.click(function (e) {
  //   console.log(scTop);
  //   // 보정수치계산: position - 위치

  //   // 처음클릭상태 변경

  //   

  //   // 전체 오디오 멈추기
  //   track.each((idx, ele) => {
  //     $(ele).find(".AUDIO").get(0).pause();
  //   });
  //   // 오디오재생 변수 할당
  //   let iam = $(this).find(".AUDIO").get(0);
  //   // 오디오 클릭시 처음부터  재생
  //   iam.currentTime = 0;

  //   iam.play();

  //   // 앨범열기 상태값 변경하기
  //   
   //1 열린상태
  // }); // 메인 트랙 커버박스 클릭 이벤트 //
  // 앨범 z-index주기
  $(track.get().reverse()).each(function (ti, te) {
    $(this).css({ zIndex: ti });
  });
  // 앨범 듀레이션 뿌려주기
  ttrack.each(function (t1, r1) {
    $(r1).each((t2, r2) => {
      $(r2).css({
        animationDuration: `${70 + t1 / 3}s`,
      });
    });
  });
  // 상단 햄버거 버튼 클릭시 애니메이션
  tbt.click(function () {
    $(this).toggleClass("on");
    Widbb();
  }); // 상단 햄버거 버튼 클릭시 이벤트 //

  // 상단 첫번쨰 MPP호버시 늘어나는 애니
  mpp.hover(
    function () {
      // over
      let myw = $(">div>span", this);
      myw.each((idx, ele) => {
        $(ele)
          .parent() // 부모div
          .css({
            width: $(ele).width() + "px",
            paddingRight: ".9vw",
          });
      });
    },
    function () {
      // out
      $($(">div", this)).css({
        width: "0",
        paddingRight: "0",
      });
    }
  );
  /* ******************************* */
  // 상단 GNB A요소 호버시 슬라이드 다운효과
  ssm.css({
    width: "99.6vw",
    background: "#000",
    left: "0",
  });
  Gul.hover(
    function () {
      //오버시
      $(this).children("ul").stop().slideDown();

      GuIA.css({
        color: "black",
        transition: ".5s",
        fontweight: "bold",
      });
      navC.css({ background: "#fff", transition: ".2s" });
    },
    function () {
      //아웃시
      $(this).children("ul").stop().slideUp();

      GuIA.css({
        color: "#fff",
        transition: ".5s",
        fontweight: "bold",
      });
      navC.css({ background: "#000", transition: ".2s" });
    }
  );

  // 햄버거 버튼 안쪽 요소들 오버시--------
  Hamli.hover(
    function () {
      const tfs = $(this).find(".sham");
      // 마우스 오버시
      tfs.stop().slideDown();

      $(this)
        .children(".hambtnbiga")
        .css({ backgroundColor: "white", color: "black" });
    },
    function () {
      // 마우스 아웃시
      const tfs = $(this).find(".sham");
      tfs.stop().slideUp();

      $(this)
        .children(".hambtnbiga")
        .css({ backgroundColor: "black", color: "white" });
    }
  );
  // 햄버거 버튼 안쪽 요소들 오버시

  // 음소거 버튼 클릭
  mtb.click(function () {
    MuteBtn();
  }); // 음소거 버튼
}); //제이쿼리 로딩구역/////////////////////////
