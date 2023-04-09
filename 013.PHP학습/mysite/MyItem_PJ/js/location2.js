// 오시는길 페이지 JS - location.js ////

$(function () { /// jQB //////////////////

    /// 지도 메뉴 클릭시 지도변경하기 //
    $(".menu a").click(function (e) { //e-이벤트전달변수

        // 기본이동막기
        e.preventDefault();

        // 1. 맵메뉴 class변경하기
        $(this).addClass("on")
            .siblings().removeClass("on");
        
        // 2. 클릭된 a요소의 href속성값 읽어오기
        // 이 속성값은 지도의 표시할 위도,경도값이다!
        let pos = $(this).attr("href");
        pos = pos.split(",");//위도,경도값 잘라서 배열로!
        console.log("위도:"+pos[0]+"/경도:"+pos[1]);
        
        // 3. 툴팁 메시지 가져오기
        let msg = $(this).attr("data-msg");
        console.log("툴팁:"+msg);
        
        // 4. 구글맵 함수 호출
        myMap(pos[0],pos[1],msg);

    }); /////////// click ////////////
    
    // 처음에 뉴욕수족관 나오게 최초호출을 trigger로하기!
    $(".menu a").first().trigger("click");
    

}); ////////// jQB //////////////////////


/*///////////////////////////////////////////
  함수명: myMap
  기능: 구글맵 위치셋팅
*/ ////////////////////////////////////////////
function myMap(v1, v2, msg) {
    // v1-위도, v2-경도, msg-툴팁메시지
    
    // 지도를 넣을 대상
    var mapCanvas = document.querySelector(".gmap");
    // 지도 위도,경도값 셋팅
    var myCenter = new google.maps.LatLng(v1, v2);
    // 지도 확대,축소옵션
    var mapOptions = {
        center: myCenter,
        zoom: 16 // 클수록 확대
    };
    // 위의 변수값으로 구글맵 호출생성!
    var map = new google.maps.Map(mapCanvas, mapOptions);
    // 지도의 위치표시자 셋팅
    var marker = new google.maps.Marker({
        position: myCenter,
        // 서버에 있는 이미지를 불러올 수 있다!
        icon: "https://aux4.iconspalace.com/uploads/9891377811176944030.png",
        // 지도표시자를 위아래로 애니메이션 하는 옵션
        // BOUNCE 는 위아래움직임, DROP 은 한번에 내려옴
        animation: google.maps.Animation.BOUNCE,
        // title은 마우스 오버시 툴팁메시지
        title: msg // 지도별 전달된 툴팁메시지 넣기!

    });
    marker.setMap(map);
} ////// myMap함수 ////////////////////////////////////
