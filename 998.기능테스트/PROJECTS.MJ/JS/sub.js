// PMJSUB PJ
import { GuIA, Gul, Hamli, navC, ssm, tbt } from "./module/variable.js";
import { PMJ_SUB_FOR_AL, Widbb } from "./module/FUNCTIONS.js";

PMJ_SUB_FOR_AL();
// import {albnum} from `./main`;
$(() => {
  tbt.click(function () {
    //버튼에 줄가있는거 x자 만들기
    $(this).toggleClass("on");
    Widbb();
  }); // 상단 햄버거 버튼 클릭시 이벤트 //
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

  // 햄버거 버튼 마우스 오버 아웃 시
  Hamli.hover(
    function () {
      const tfs = $(this).find(".sham");
      // 마우스 오버시
      tfs.stop().slideDown();

      $(this)
        .children(".hambtnbiga")
        .css({ backgroundColor: "white", color: "black" });

      // 햄버거 버튼 하위 ul li a 호버시 배경색 글자색 반전 -> 만들기!
    },
    function () {
      // 마우스 아웃시
      const tfs = $(this).find(".sham");
      tfs.stop().slideUp();

      $(this)
        .children(".hambtnbiga")
        .css({ backgroundColor: "black", color: "white" });

      // 햄버거 버튼 하위 ul li a 호버시 배경색 글자색 반전 -> 만들기!
    }
  );

  let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    rewind: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,

      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}); /////// JQB
