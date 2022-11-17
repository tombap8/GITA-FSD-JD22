// 보그 PJ 링크 시스템 JS - linksys.js

$(() => {
    ///////////// jQB //////////////////////

    // 로딩확인
    console.log("로딩완료!");

    /**************************************** 
        로그인, 회원가입, 갤러리 아이콘 넣기
    ****************************************/
    // 대상: .sns a:last-child (마지막 카스링크)
    // 변경내용: 대상요소 앞에 형제요소로 a요소 삽입
    // 메서드: before(요소) -> 선택요소 앞에 형제요소로 추가
    // -> 참고) after(요소) -> 선택요소 뒤에 형제요소로 추가
    // 선택자 :last (제이쿼리전용!)
    $(".sns a:last").before(`
        <a href="#" class="fi fi-laptop">
            <span class="ir"> 로그인 </span>
        </a>
        <a href="#" class="fi fi-user-secret">
            <span class="ir"> 회원가입 </span>
        </a>
        <a href="#" class="fi fi-camera">
            <span class="ir"> 갤러리 </span>
        </a>
   `);

    ///// sns 파트 a 요소들에 툴팁넣기 //////
    // each((순번,요소)=>{구현부})
    $(".sns a").each((idx, ele) => {
        // attr(속성명,값)
        // -> 값으로 자식요소인 .ir의 텍스트읽어감!
        $(ele).attr("title", $(ele).children(".ir").text().trim());
        // trim() 앞뒤공백제거
    }); ///////// each ////////////

    /************************************* 
        SNS  메뉴 파트 링크 셋팅하기
   *************************************/
    // 대상: .sns a
    $(".sns a").click(function (e) {
        // e - 이벤트전달변수
        // a요소 기본이동막기
        e.preventDefault();
        // console.log("아이콘클릭!");

        // 1. 클릭된 a요소 텍스트읽기
        let atxt = $(this).text().trim();
        console.log(atxt);


    }); ///////////// click ////////////////

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
            location.href = "category.html?cat=" + encodeURIComponent(atxt);
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
