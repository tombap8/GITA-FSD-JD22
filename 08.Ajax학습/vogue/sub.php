<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fashion | 보그 코리아 (Vogue Korea)</title>
    <!-- 탭메뉴 아이콘 넣기 -->
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/sub.css">
    <link rel="stylesheet" href="css/media.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/common.js"></script>
    <script src="js/sub.js"></script>
</head>
<body>
    <!-- 로그인 세션처리 인클루드 -->
    <?php include "inc/login_session.inc" ?>
    
    <!-- 1. 상단영역 -->
    <div id="top">
        <?php include "inc/top.inc" ?>
    </div><!-- #top -->
    
    <!-- 2. 메인영역 -->
    <div class="bgc">
        <main class="cont ibx">

            <!-- 1. 타이틀 -->
            <h2 class="stit"></h2>

            <!-- 2. 서브메뉴(LNB-Local Navigation Bar) -->
            <nav class="lnb"></nav>

            <!-- 3. 서브컨텐츠박스 -->
            <section class="pt2 rbx">
                <div class="rbxIn">
                    <div class="cbx bgi bg1-1">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg1-2">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg1-3">
                        <h2></h2>
                    </div>
                </div>
            </section>
            <section class="pt2 rbx">
                <div class="rbxIn">
                    <div class="cbx bgi bg2-1">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg2-2">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg2-3">
                        <h2></h2>
                    </div>
                </div>
            </section>
        </main>
    </div>
    <!-- 3. 하단영역 -->
    <div class="bgc">
        <?php include "inc/info.inc" ?>
    </div>

</body>
</html>