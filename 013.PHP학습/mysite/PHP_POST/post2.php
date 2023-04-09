<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>POST 방식으로 데이터 전달 - 처리페이지</title>
    <?php
        // POST 방식으로 넘어온 데이터를 변수에 담는다
        // POST 방식의 데이터 읽어오는 방법:
    
        // $_POST[name속성값을 문자형으로 씀]
        // -> post로 넘어온 값을 연관배열에 담는다!
    
        // 여기서 name 속성이란 넘겨주는 페이지의 폼요소 내부의 요소의 name 속성!(이 속성셋팅이 매우 중요하다!) 
    
        // POST방식은 민감한 데이터를 다룰때 사용한다!
    
        $color = $_POST["color"];
        $food = $_POST["food"];
        //화면출력:
        echo "당신이 좋아하는 색은 $color 입니다!<br>";
        echo "당신이 좋아하는 음식은 $food 입니다!"
    ?>
    <style>
        body{
            background-color: <?=$color?>;
            /*배경색은 서버에서 읽어온 색상명을 넣어준다
            이때 php변수가 할당된 아래쪽에 코드가 있어야함*/
            font-size: 24px;
            font-weight: bold;
            text-shadow: 0 0 3px #000;
            color: #fff;
            text-align: center;
            line-height: 50px;
            white-space: nowrap;
        }
    </style>

</head>
<body>
   <br><br>
   <button onclick="location.href='post1.php'">
       처음으로 돌아가기
   </button>
   
   
    
</body>
</html>