// 링크 이동 js
import {abtn} from "./module/variable.js"
$(() => {
    // 변수선언
    
    console.log("이동준비완료")

    abtn.each((idx, ele) => {
        /* 모든 a요소 기본 이동 막기  */
        $(ele).click(function (e) {
            e.preventDefault();

            // a요소 버튼 클릭시
            let atxt = $(this).text().trim();

            console.log("안뇽", atxt);

            let url;

            /* 
                    앨범 소개 = at
                    앨범 상세 = ad
                    인기 = pp
                    게시판 = bd
                     // 자유 = mbd
                     // 회원 = ubd
                    언어 = lang
                    기타 세부사항 = od
                    안내문구 = introtext
                    페이지 소개글 = pagetext
                */
            switch (atxt) {
                case "앨범소개":
                    url = "at";
                    break;
                case "앨범 상세":
                    url = "ad";
                    break;
                case "인기":
                    url = "pp";
                    break;
                case "PMJ":
                    url = "pmj";
                    break;
                case "BMJ":
                    url = "bmj";
                    break;
                case "MMJ":
                    url = "mmj";
                    break;
                case "게시판":
                    url = "bd";
                    break;
                case "자유 게시판":
                    url = "mbd";
                    break;
                case "회원전용 게시판":
                    url = "ubd";
                    break;
                case "LANGUAGE":
                    url = "lang";
                    break;
                case "EngliSh":
                    url = "lang";
                    break;
                case "中國語":
                    url = "lang";
                    break;
                case "日本語":
                    url = "lang";
                    break;
                case "앨범소개♡":
                    url = "at";
                    break;
                case "앨범 상세":
                    url = "ad";
                    break;
                case "CHART♡":
                    url = "pp";
                    break;
                case "PMJ(노래방인기!)":
                    url = "pmj";
                    break;
                case "BMJ(빌보드!)":
                    url = "bmj";
                    break;
                case "MMJ(일반 음원차트!)":
                    url = "mmj";
                    break;
                case "게시판♡":
                    url = "bd";
                    break;
                case "회원전용":
                    url = "ubd";
                    break;
                case "일반게시판":
                    url = "mbd";
                    break;
                case "기타세부사항♡":
                    url = "od";
                    break;
                case "안내문구":
                    url = "introtext";
                    break;
                case "페이지 소개글":
                    url = "pagetext";
                    break;
                case "logIn":
                    url = "lg";
                    break;
                case "Sign":
                    url = "mem";
                    break;
                case "GO-MAIN":
                    url = "HOME";
                    break;
            } ///// switch /////

            console.log("url", url);
            /* 
                    앨범 소개 = at
                    앨범 상세 = ad
                    인기 = pp
                    게시판 = bd
                     // 자유 = mbd
                     // 회원 = ubd
                    언어 = lang
                    기타 세부사항 = od
                    안내문구 = introtext
                    페이지 소개글 = pagetext
                    로그인 = lg
                    회원가입 = mem
                */

            if (url === "at" || url === "ad") {
                window.location.href = "sub.html";
            } else if (url === "pp") {
                window.location.href = "index.html";
            } else if (url === "bd" || url === "mbd" || url === "ubd") {
                window.location.href = "border.html";
            }  else if (url === "lg") {
                window.location.href = "login.html";
            } else if (url === "mem") {
                window.location.href = "join.html";
            }else if (
                url === "lang" ||
                url === "" ||
                url === "introtext" ||
                url === "od"
            ) {
                alert(
                    "현제 공사중 입니다. / 게시판(일밤,회원) /앨범상세(서브페이지)  /안내문구,페이지소개 / 를 이용 가능하십니다! 이용에 불편을 드려 죄송합니다.",
                    function () {
                        window.location.href = "./sub.html";
                    }
                );
            }else if (url === "HOME"){
                window.location.href = "./main.html";
            }
        }); ///// abtn click //////
    }); /// each ////
}); ///////// JQB ///////////////
