// 보그 PJ 카테고리 페이지 JS - category.js

// Get방식으로 넘어온 값 받기!
// location.href로 받는다!!!
// 페이지이동 : location.href = url주소
// url값 읽기 : 변수 = location.href
let pm = location.href;

// 만약 물음표(?)가 없이 바로 페이지가 열린경우 걸러주기!
// 없다면 split에서 에러가 남!
// 에러방지위해 물음표 없으면 첫페이지로 돌려보내기!!!
// indexOf(문자열) -> 문자열의 위치를 알려주는 JS내장함수
// 만약 문자열이 없으면 -1을 리턴함!
console.log(pm.indexOf("?"));

if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다~!");
    location.href = "index.html";
    // 첫페이지로 돌아감!
} //////// if ///////////

// url에서 물음표로 값을 잘라오기 중 뒤엣값[1]
// split(자를기준문자열) -> 배열에 담긴다!
pm = pm.split("?")[1];
// 이퀄(=)로 잘라서 뒤엣값[1] -> (키=값) 중 (값)만!
pm = pm.split("=")[1];
// encodeURIComponent로 변환해서 보냈으므로
// decodeURIComponent로 재변환!
pm = decodeURIComponent(pm);
// 카테고리명 확인!
console.log(pm);

/********************************************** 
    [ 제이쿼리에서 제이슨 다루기! ]

    1. 제이슨 가져오기 메서드 : 
    $.getJSON(파일경로,함수)
    
    구체적으로...
    $.getJSON(파일경로,(전달변수)=>{코드})
    -> 함수의 전달변수는 제이슨 파일의 데이터를 전달함!

**********************************************/
