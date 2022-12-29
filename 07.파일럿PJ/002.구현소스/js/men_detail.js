// 남성 상세페이지 JS - men_detail.js //

// 남성 신상품 정보
var sinsang = {
    "m1": "[남성]카모전판프린트 PQ 티셔츠^DMTS7K731-MG^99,000원",
    "m2": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-BK ^89,000원",
    "m3": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-WH ^89,000원",
    "m4": "[남성]부분 스트라이프 PQ 티셔츠^DMTS77731-NY ^99,000원",
    "m5": "[남성]웰딩포인트 트레이닝 하프팬츠^DMTB61731-MD ^89,000원",
    "m6": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-GR ^99,000원",
    "m7": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-KA ^99,000원",
    "m8": "[남성]베이직 솔리드 래쉬가드^DMSW15731-BK ^49,000원",
    "m9": "[남성]남성 루즈핏 슬리브리스^DMSL6C731-MG ^59,000원"
};

///////////////////////////////////////////////////////
//// 페이지 로딩시 파라미터 변수 받아서 페이지 셋팅하기 ///

// 파라미터변수
let pm = location.href;
// location.href 가 오른쪽에 있고 왼쪽 변수에 할당때는
// url정보를 가져와서 변수에 할당한다!

// 만약 물음표(?)전달값에 없다면 men페이지로 돌려보낸다!
// indexOf(문자열) - 찾는 문자열의 위치순번을 알려줌
// 그런데 이 문자열이 없다면 -1을 리턴함!
if (pm.indexOf("?") === -1) { //물음표가 없다면
    location.href = "men.html";
} ///////// if문 //////////////////////


// url데이터 가공 - 물음표(?)로 잘라 뒤엣것 [1]
// 그리고 이퀄(=)로 잘라 뒤엣것 [1]
pm = pm.split("?")[1].split("=")[1];

console.log("전달값:" + pm);

///////////////////////////////////////////
////// 페이지 셋팅 /////////////////////////
// $를 사용하지 않는 제이쿼리 호출은 멀티줌 플러그인 때문!
// 전달값으로 내부에서 $를 쓸 수 있도록 전달값을 셋팅해야함!
jQuery(document).ready(function ($) {

    // 1. 큰 이미지 변경하기 //////////////////////////
    // - 축소/확대 플러그인을 적용하기 위해 
    // 적용할 큰 이미지의 id를 동적으로 변경한다!
    // 아이디명이 전달값에 들어온 이름으로 셋팅된다!
    $("#bigimg").attr("id", pm);

    // 큰 이미지가 있는 경우
    if (pm === "m1" || pm === "m2") {
        $("#" + pm).attr("src", "images/" + pm + "-1.jpg");
    }
    // 큰 이미지가 없는 경우
    else {
        $("#" + pm).attr("src", "images/" + pm + ".png");
    }

    // 2. 썸네일 이미지 변경하기 /////////////////////////
    // 6개의 이미지를 for문을 돌려서 코드를 만든다!

    // 코드변수
    let hcode = "";

    // 썸네일이 있는 경우 //////
    if (pm === "m1" || pm === "m2") {

        for (let i = 1; i <= 6; i++) {
            hcode += '<a href="images/' + pm + '-' + i + '.jpg" data-large="images/' + pm + '-' + i + '.jpg"><img src="images/' + pm + '-' + i + '.jpg" alt="썸네일" /></a>';
        } ////// for문 //////////////

    } ////////// if /////////////////////

    // 썸네일이 없는 경우 //////
    else {

        for (let i = 1; i <= 6; i++) {
            hcode += '<a href="images/' + pm + '.png" data-large="images/' + pm + '.png"><img src="images/' + pm + '.png" alt="썸네일" /></a>';
        } ////// for문 //////////////

    } ////////// if /////////////////////

    // 썸네일 이미지 html코드를 실제 적용요소에 넣기!
    $(".thumbs").html(hcode).addClass(pm);
    // 멀티줌에서 썸네일박스이 클래스명이 큰 이미지 아이디명과
    // 같게 셋팅하면 클릭시 큰이미지가 썸네일로 변경된다!
    // 따라서 큰 이미지 아이디명으로 클래스를 추가함!

    // 3. 상품정보 셋팅하기 ////////////////////////
    // - 파라미터변수값으로 셋팅된 객체에서 값을 가져와서 넣는다!
    let ss = sinsang[pm].split("^");
    // 구분자 ^로 자르면 배열에 셋팅됨
    // [0]-상품명, [1]-상품코드, [2]-가격
    // console.log("상품정보:"+ss);

    // 3-1. 상품명 넣기
    $("#gtit").text(ss[0]);

    // 3-2. 상품코드 넣기
    $("#gcode").text(ss[1]);

    // 3-3. 상품가격 넣기
    $("#gprice").text(ss[2]);

    // 3-4. 토탈가격 초기셋팅 : "원"문자삭제
    $("#total").text(ss[2].replace("원", ""));


    // 4. 상품 상세이미지 넣기
    // 대상: .dimgs 
    // 여러이미지가 준비된 것
    if (pm === "m1" || pm === "m2") {

        for (let i = 1; i <= 6; i++) {
            $(".dimgs")
                .append('<img src="images/'+pm+'-'+i+'.jpg" alt="상세이미지">');
        } /////// for ///////////////////

    } //////// if ///////////////////////
    // 이미지가 하나인 경우
    else {

        for (let i = 1; i <= 6; i++) {
            $(".dimgs")
                .append('<img src="images/'+pm+'.png" alt="상세이미지">');
        } /////// for //////////////////

    } //////// if ///////////////////////


    /// 5. 멀티줌 플러그인 적용하기 /////////////
    // 대상: 동적으로 생성된 큰 이미지 아이디명을 사용

    // 확대이미지 설정변수
    let imgsrc;
    if(pm==="m1"||pm==="m2"){
        imgsrc = "images/"+pm+"-1.jpg";
    }
    else{
        imgsrc = "images/"+pm+".png";
    }

    $("#"+pm).addimagezoom({
        zoomrange: [2, 10], //확대범위[최소비율, 최대비율]
        largeimage: imgsrc, //확대로볼이미지
        magnifiersize: [700, 700], //확대화면 크기[가로,세로]
        magnifierpos: "right", //확대화면 위치(공간확보 필수)
        cursorshade: true, //사진위확대범위 표시자(true보임)
        cursorshadecolor: "#000", //확대범위표시 색상
        cursorshadeopacity: 0.4, //확대범위 투명도

        //갤러리관련 설정
        //갤러리 설정시 id명과 같은 이름의 class를 썸네일 박스에 주고 thumbs라는 클래스명도 주면 하나의 갤러리 셋이 완성된다.

    }); /// multizoom 플러그인 ////////////////
    // 멀티줌 플러그인에서 m1 이미지셋만 크기가 700X700이고
    // 다른 이미지는 이것 보다 작다. 플러그인은 원본 사이즈로 
    // 축소/확대를 하므로 작은 이미지로 나오는 것을 고치려면
    // 이미지를 700X700으로 변경하여 넣으면 된다!

    // 6. 뒤로가기 버튼
    $(".back").click(function(e){
        e.preventDefault();//기본막기
        history.back();
        /* 
            history 페이지 이동에 관한 3가지 JS함수
            1. history.back() - 이전에 열었던 페이지로 이동
            2. history.go(숫자) - 숫자만큼 전후 페이지로 이동
            3. history.forward() - 이후페이지로 다시 이동
        */

    });/////// click /////////////////

    // 7. 구매수량 증감 버튼
    // 대상: .chg_num img
    // 증감수
    let gnum = 1;
    $(".chg_num img").click(function(){
        // 순번
        let idx = $(this).index();
        console.log("순번:"+idx);

        // 증가 0, 감소 1
        if(idx){//감소
            gnum--;
            if(gnum<1) gnum=1;
        } ///////// if //////////////
        else{//증가
            gnum++;
        } ///////// else //////////

        //출력대상: #sum (input요소니까 value값으로 넣어줌)
        // val() 메서드 사용
        $("#sum").val(gnum);

        // 총합계 변경 함수 호출
        chgTot(gnum);

    });////////// click ////////////////

    /// 8. 총합계 변경 함수 ////
    let chgTot = function(gnum){//gnum-수량

        //console.log("총합계호출!"+gnum);

        // 1. 기본단가 숫자로 만들기
        let price = $("#gprice").text();
        price = price.replace(/,/g,"").replace("원","");
        price = Number(price);//숫자형변환
        console.log("단가:"+price);

        // 2. 총합계 계산하기: 기본단가 X 수량
        let sum = price * gnum;
        console.log("총합계:"+sum);

        // 3. 총합계 출력하기
        // 대상: #total
        // 콤마찍어 출력하기 : numberWithCommas함수호출
        $("#total").text(numberWithCommas(sum));

    };//////// chgTot함수 ///////////////////


}); //////// jQB ///////////////////////////////

//정규식함수(숫자 세자리마다 콤마해주는 기능)
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
