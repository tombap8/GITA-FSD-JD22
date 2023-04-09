<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>My Item PJ - 아이템 페이지</title>
    <link rel="stylesheet" href="css/item.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/item.js"></script>
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
            <!--아이템 타이틀-->
            <h2 class="tit">아이폰6 플러스</h2>
            <!--아이템 컨텐츠 박스-->
            <div class="ibox">
                <!--사진영역-->
                <figure class="itbx timg">
                    <img src="images/iphone6.png" alt="아이템이미지">
                </figure>
                <!--글자박스-->
                <p class="itbx tcont">
                    iPhone 6s 및 iPhone 6s Plus는 32GB 또는 128GB 저장 용량으로 구입할 수 있습니다. "GB"는 기가바이트를 의미하며, 기가바이트가 클수록 앱, 게임, 사진, HD 동영상, 음악, 영화 등을 비롯한 다양한 콘텐츠를 더 많이 저장할 수 있습니다. 저장해야 할 사진이나 음악이 많거나 앱을 많이 다운로드하는 경우에는 용량이 큰 iPhone을 구입하는 것이 좋습니다. 반대로 앱을 많이 다운로드하지 않거나 사진 또는 동영상을 촬영하지 않는다면 용량이 작은 iPhone이 적당할 수 있습니다.
                </p>
            </div>
        </main>
        
        <!--3.하단영역-->
        <?php include "inc/info.inc" ?>
        
    </div>



</body></html>