// 도깨비 PJ v.2 링크시스템 JS - linksys.js

////////////// 로드구역 ///////////////////
window.addEventListener("DOMContentLoaded",()=>{

    console.log("로딩완료!");

    /// 링크 대상: .top a -> .gnb a + .tmenu a + logo a
    const link = document.querySelectorAll(".top a");
    // console.log(link);

    /// 링크 이벤트 셋팅하기 /////
    // click 이벤트
    link.forEach(ele=>{ // ele - 각a요소

        ele.onclick = ()=>{
            // 1. a요소 글자데이터
            let atxt = ele.innerText;
            console.log(atxt);

            // 주소할당변수
            let url;

            // 2. 링크 분기하기
            switch(atxt){
                case "프로그램 소개": url = "etc"; break;
                case "인물소개": url = "etc"; break;
                case "인물관계도": url = "cat"; break;
                case "미리보기": url = "etc"; break;
                case "동영상": url = "etc"; break;
                case "클립영상": url = "etc"; break;
                case "다시보기": url = "etc"; break;
                case "예고편": url = "etc"; break;
                case "스페셜": url = "etc"; break;
                case "사진첩": url = "etc"; break;
                case "현장 포토": url = "etc"; break;
                case "대표 포스터": url = "etc"; break;
                case "OST": url = "etc"; break;
                case "시청자 게시판": url = "board"; break;
                case "로그인": url = "login"; break;
                case "회원가입": url = "member"; break;
                case "트위터 바로가기": url = "twit"; break;
                case "인스타그램 바로가기": url = "insta"; break;
                case "페이스북 바로가기": url = "fab"; break;
                default : url = "home";
            } //////// switch case ///////

            console.log("url:",url);

        }; //////// click //////////

    }); //////////// forEach /////////

});/////////// 로드구역 ///////////////////////