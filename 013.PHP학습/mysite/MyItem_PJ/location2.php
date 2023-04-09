<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>My Item PJ - 오시는길(구글맵API)</title>
    <link rel="stylesheet" href="css/location2.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/location2.js"></script>
</head>

<body>
    <!--로그인세션처리 인클루드-->
    <?php include "inc/login_session.inc"; ?>

    <!--전체박스-->
    <div class="wrap">
        <!--1.상단영역-->        
        <?php include "inc/top.inc" ?>

        <!--2.컨텐츠영역-->
        <main id="cont">
            <!--타이틀-->
            <h2 class="tit">오시는길</h2>
            <!--지도메뉴-->
            <h4 class="menu">
                <a href="40.57425910842332, -73.97591606678563" class="on" data-msg="여기는 내일 투어할 수족관입니다!">뉴욕수족관</a> |
                <a href="48.86009549097392, 2.32684034794685" data-msg="프랑스대표 미술관에 오신것을 환영합니다!">오르세미술관</a> |
                <a href="40.41400233516721, -3.6917301350707796" data-msg="스페인최고의 미술관에 오신것을 환영합니다!">프라도미술관</a>
                <!--a요소의 href속성에 지도의 위도,경도값을 셋팅해 준다!-->
            </h4>
            <!--맵박스-->
            <div id="map">
                <div class="gmap map"></div>
            </div>
        </main>
        
        <!--3.하단영역-->
        <?php include "inc/info.inc" ?>
    </div>
    
    <!--구글맵호출-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAvpFtfhEfPLtRfYVkxwa-BfpAdKB9nSK4&callback=myMap"></script>
    <!--
        구글의 무료 지도이용 정책변경에 따라
        구글지도 API키를 발급받아서 위의 key="발급된키값"을 
        유효한 값으로 넣어야 구글지도를 이용할 수 있다!
        (2018년 7월 16일부터 적용)
    -->


</body></html>