// PMJSUB PJ
import {
    GuIA,
    Gul,
    Hamli,
    IT,
    jBTN,
    navC,
    PT,
    ssm,
    tbt,
} from "./module/variable.js";
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

    /********************************************* 
    [ 유효성 검사 구역!! ]
  *********************************************/

    jBTN.click((e) => {
        // 기본 이동 막기 !
        e.preventDefault();

        if (IT.val().trim() === "" || PT.val().trim() === "") {
            alert("ID와 PASSWORD를 모두 입력해주세요!");
            IT.val("").focus();
            PT.val("");
        } //// if문 입력 하지 않았을시 전부 지우고 아이디에 포커스지정
        else {
            // AJAX 의 post방식으로 로그인 처리 페이지 호출하기 -> 백엔드에서 할것임
            $.post(
                "로그인처리할 페이지 주소 적기 ",
                // 보낼 데이터 정리하기
                {
                    IT: $("#IDTEXT"),
                    PT: $("#PWDTEXT"),
                },
                // 처리후 함수 -> 백엔드
                function (RS) {
                    RS = RS.replace(/\s/g, "");
                    console.log("결과: ", RS);
                    if (RS === "USERS YOUR SUCCES") {
                        alert("PMJ 밑 본사이트 입장을 환영합니다!");
                        // 로그인 성공후 본페이지로 이동하기
                        location.replace("main.jsp");
                    } // IF
                    else if (RS === "YOU NOT CONNECTER!") {
                        alert(
                            "ID 를 한번더 확인해주십시오. 사용가능한 ID가 아닙니다."
                        );
                        IT.val("").focus();
                        PT.val("");
                    } //// else if : 아디 불존재
                    else if(RS === "YOU NOT CONNECTER TO PWD!"){
                      alert("PASSWORD 를 한번더 확인해 주십시오. 비밀번호가 ID와 일치 하지 않습니다.");
                      PT.val("").focus();
                    } // else if : 비밀번호 불일치
                    else{
                        alert("개발중입니다 이용에 불편을 드려 죄송합니다. 자세한 것은 개발자에게 문의 바랍니다. 감사합니다."+RS);
                    } /// else : 기타 오류들 
                } //// RS 변수
            ); // $.post
        } // else
    });
}); /////// JQB
