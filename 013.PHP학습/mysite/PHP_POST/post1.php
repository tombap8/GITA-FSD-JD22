<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>POST방식으로 데이터 전달하기 - 작성페이지</title>
    
</head>
<body>
   <!--
       form요소의 method 속성의 종류
       1. get방식: 전송할 페이지로 url의 뒤에 전달할 데이터를 보내는 방식
       2. post방식: 전송할 페이지로 데이터를 숨겨서 전달하는 방식
   
   -->
   <h1>POST 방식으로 데이터 전달하기</h1>
   <form action="post2.php" method="post">
       <fieldset>
           <legend>자신이 좋아하는 색과 음식을 작성하세요!</legend>
           <h2>당신이 좋아하는 색은?<br>
               (반드시 웹색상명으로 입력할 것!)
           </h2>
           <input type="text" id="color" name="color">
           <hr>
           <h2>당신이 좋아하는 음식은?</h2>
           <input type="text" name="food"> <br><br>
           <input type="submit" value="전송버튼">
           
           
       </fieldset>
   </form>
   
   <!--
       fieldset 요소 - 폼요소의 작성 구분요소(필수요소는 아님)
       -> 기본 디자인으로 테두리가 생김
       하위요소 legend 는 폼작성 구분 구역 타이틀
   -->
   
   
   
   
    
</body>
</html>