// GNB 링크 시스템 JS - linksys.js

$(function () { /// jQB /////////////////////////

    console.log("로딩완료!");

    // 상단영역 링크 클릭시 페이지 이동하기
    // click 이벤트 대상: #top a
    $("#top a").click(function (e) {
        // e는 이벤트발생할때 함수내부로 전달하는
        // 이벤트 관련 전달변수
        e.preventDefault();
        // 기본기능 막기코드
        // a태그 같은 경우 이동속성을 막아준다!

        // 1. a태그의 글자읽어오기
        var txt = $(this).text().trim();
        // trim() 메서드 : 문자열 앞뒤공백제거
        // 트림(트름처럼 공기를 빼주는것!)
        console.log("텍스트:" + txt);

        // 2. 텍스트와 페이지연결하기
        // 이동주소
        var url;

        switch (txt) {
            case "Home":
                url = "index.php";
                break;
            case "프로필":
                url = "profile.php";
                break;
            case "회원가입":
                url = "member.php";
                break;
            case "로그인":
                url = "login.php";
                break;
            case "게시판":
                url = "board.php";
                break;
            case "오시는길":
                url = "location.php";
                break;
            case "트위터":
                url = "https://twitter.com/tomhanks";
                break;
            case "인스타그램":
                url = "https://www.instagram.com/accounts/login/?next=/tomhanks/";
                break;
            case "페이스북":
                url = "https://www.facebook.com/TomHanks";
                break;
            default://아이템 페이지는 모두 default에서 처리!
                url = "item.php?inm=" + escape(txt);
        } ///// switch case //////////
        
        console.log("url:"+url);
        
        // url로 페이지 이동하기!
        
        // sns는 새창으로 열기!
        if(txt == "트위터" || 
           txt == "인스타그램" || 
           txt == "페이스북") 
            window.open().location.href = url;
        // 동일 시스템 페이지는 같은 창에서 열기!
        else 
            location.href = url;





    }); //////// click //////////////



}); /////// jQB //////////////////////////////
//////////////////////////////////////////////
