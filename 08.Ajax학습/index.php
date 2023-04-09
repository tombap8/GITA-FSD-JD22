<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP 첫페이지</title>
    <!-- PHP코딩영역 -->
    <?php 
        //주석
        /* 주석 */
        # 주석

        // php변수는 문자앞에 $를 씀
        $link = "<a href='vogue/'>보그바로가기</a>";
        $link2 = "<a href='PHP_include/'>인클루드</a>";

        // 화면출력 -> echo 메시지 
        echo "<h1>나의 첫 PHP페이지!</h1>";
        echo "<h2>$link</h2>";
        echo "<h2>$link2</h2>";
        // 쌍따옴표안에 php변수를 바로쓸 수 있음!
        
    ?>
</head>
<body>
    
</body>
</html>