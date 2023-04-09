// 오시는길 페이지 JS - location.js ////

$(function () { /// jQB //////////////////

    /// 지도 메뉴 클릭시 지도변경하기 //
    $(".menu a").click(function (e) { //e-이벤트전달변수

        // 기본이동막기
        e.preventDefault();

        // 1. 클릭된 a요소의 순번알아오기
        let idx = $(this).index();
        console.log("순번:" + idx);
        
        // 맵2 클릭시
        if(idx===3) location.href = "location2.php";


        // 2. a요소의 순번과 같은 번호의 .maps요소 보이기
        $(".maps").eq(idx).show()
            .siblings().hide();

        // 3. 맵메뉴 class변경하기
        $(this).addClass("on")
            .siblings().removeClass("on");

        // 4. 다음맵일 경우 최초로딩시 생성호출
        // -> 처음에 display:none이기때문에 로딩이 안됨
        // -> 따라서 처음 보여줄때 생성호출해야함!
        if (idx === 2 && kakaoSts === 0) {
            // 최초한번만 실행하도록 상태값 변경하기
            kakaoSts = 1;
            kakao();

        } /////// if //////////////////


    }); /////////// click ////////////

}); ////////// jQB //////////////////////

/*//////////////////////////////////////////////
    함수명: kakao
    기능: 다음맵로딩
*/ //////////////////////////////////////////////
let kakaoSts = 0; //실행여부
function kakao() {

    new daum.roughmap.Lander({
        "timestamp": "1615860935571",
        "key": "24unm",
        "mapWidth": "700",
        "mapHeight": "400"
    }).render();

} ////// kakao 함수 /////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
