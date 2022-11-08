// 보그 PJ 링크 시스템 JS - linksys.js

$(() => {
    ///////////// jQB //////////////////////

    // 로딩확인
    console.log("로딩완료!");

    /********************************** 
        GNB 메뉴 파트 링크 셋팅하기
    **********************************/
    $(".gnb a").click(function (e) {
        //e-이벤트 전달변수
        // 기본이동 막기
        e.preventDefault();

        // 1. 클릭된 a요소의 글자읽기
        let atxt = $(this).text().toLowerCase().trim();
        // toLowerCase() 소문자변환
        // 참고) toUpperCase() 대문자변환
        // trim() 앞뒤공백제거
        console.log(atxt);

        // 2. 서브페이지 이동하기
        if (atxt !== "search") {
            // 검색이 아니면!
            location.href = "category.html?cat=" + 
            encodeURIComponent(atxt);
            // 카테고리를 구분하기 위한 파라미터 키=값 쌍을 보냄
            // cat=카테고리명
            // 이것을 받아서 페이지 셋업을 한다!
            // 이렇게 데이터를 url로 전달하는 방식을 GET방식이라고함
            // 그런데 데이터중 특수문자가 있으므로 (time & gem)
            // 이것을 보낼때 encodeURIComponent() 로 변환해서 보내고
            // 받는 곳에서는 decodeURIComponent() 로 복원함!
        } ////////// if ////////////
    }); /////////////// click /////////////
}); //////////////// jQB //////////////////////
