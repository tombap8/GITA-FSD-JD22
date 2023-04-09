<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>My Item PJ - 게시판 페이지</title>
    <link rel="stylesheet" href="css/board.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script>
        // 아이프레임 리사이즈 함수 //
        // 아이프레임이 로드되면 본 함수를 호출하여 높이값을 재설정한다!
        function autoResize(i){// i - 아이프레임 자신
            // 1. 아이프레임 높이값 구하기(컨텐츠에 따라 동적으로 바뀜)
            // contentWindow - 아이프레임을 불러온 별도의 창을 지칭함
            let iframeHeight = 
            (i).contentWindow.document.body.scrollHeight;
            // 2. 아이프레임에 높이값 적용하기
            (i).height = iframeHeight + 50;//50px정도 보정함
        } ////// autoResize 함수 /////////////
    </script>
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
            <div id="bbox">
                <iframe src="board/list.php" scrolling="no" onload="autoResize(this)"></iframe>
                <!-- onload는 아이프레임 컨텐츠가 모두 로딩되었을때 발생하는 이벤트속성 -->
                <!-- this키워드는 아이프레임 자신을 함수에 보내는 것임 -->
            </div>
        </main>
        
        <!--3.하단영역-->
        <?php include "inc/info.inc" ?>
    </div>



</body></html>