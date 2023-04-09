<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>My Item PJ - 프로필 페이지</title>
    <link rel="stylesheet" href="css/profile.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
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
            <!--입체아이폰-->
            <ul id="iphone">
                <li>
                    <span class="newFace">
                        <i class="bld">
                            잘생긴 얼굴
                        </i>
                    </span>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <!--자기소개글 박스-->
            <div class="showtxt dtxt">
                <i class="bld">디자이너 자기소개글</i>
            </div>
            <div class="showtxt ctxt">
                <i class="bld">코더 자기소개글</i>
            </div>




        </main>
        
        <!--3.하단영역-->
        <?php include "inc/info.inc" ?>
        
    </div>



</body></html>