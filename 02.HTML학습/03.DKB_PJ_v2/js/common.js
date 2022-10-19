// 도깨비 PJ v2 - 공통기능 JS - common.js

////////////////// 로드구역 ////////////////
window.addEventListener("DOMContentLoaded",
()=>{
    console.log("로딩완료!");

    // 햄버거버튼 클릭시 .top에 .on추가/제거
    // 전체메뉴 보이기 디자인 구현이 이미되어있음!
    // 대상: .ham, .top
    const ham = document.querySelector(".ham");
    const top = document.querySelector(".top");

    ham.onclick = () => top.classList.toggle("on");

}); ///////////// 로드구역 /////////////////
