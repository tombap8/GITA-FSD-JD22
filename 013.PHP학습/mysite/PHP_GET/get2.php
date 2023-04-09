<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Get방식을 이용한 가위바위보 게임! 결과페이지</title>
    <style>
        img{
            width: 200px;
        }
    </style>
</head>
<body>
   <h1>게임의 결과는?</h1>
   
   <?php 
    /*
    [ Get방식으로 넘어온 데이터 php에서 받기 ]
    (교재 p68)
    
    - 가져오는 방법:
        $_GET[키이름]
        
        -> URL쿼리가 전달하는 모든값을 이 변수에 담는데
        이것은 연관배열이다!
            
    - Get방식의 구성: url?키=값&키=값&키=값...
        여기서 이퀄앞의 문자가 키이름이다!
    */

    //echo $_GET["res"];
    //echo $_GET["nm"];
    /*
    [ PHP에서 if문 ]
    - JS와 거의 유사하나 elseif 가 하나로 붙여서 써야한다!
        
        if(조건문){
            실행문
        }
        elseif(조건문){
            실행문
        }
        else{
            실행문
        }
    
    [조건문에서 사용되는 연산자]
        
    >(크다), <(작다), ==(같다),
    !=(같지않다),<>(같지않다), >=(크거나같다)
    <=(작거나같다)
    논리곱: && 또는 and
    논리합: || 또는 or
        (주의사항: and 나 or 는 에러발생확율이 있으니
        && 나 || 를 사용하기를 추천함!)
    논리부정: !
    */    
    
    # 넘어온 데이터에 매칭하여 가위바위보를 이미지로 보여준다!
    if($_GET["res"]==1)//가위
        echo '<img src="images/ga.png" alt="'.$_GET["nm"].'">';
    elseif($_GET["res"]==2)//바위
        echo '<img src="images/ba.png" alt="'.$_GET["nm"].'">';
    elseif($_GET["res"]==3)//보
        echo '<img src="images/bo.png" alt="'.$_GET["nm"].'">';
    
    // 프로그램에서 랜덤으로 가위바위보를 내도록한다!
    
    // 랜덤수만들기(1~3사이수)
    $rdn = rand(1,3);
    
    // 랜덤수 브라우저 콘솔에 찍어보기
    echo "<script>console.log('랜덤수:$rdn');</script>";
    
    if($rdn == 1)
        echo '<img src="images/ga.png" alt="가위">';
    elseif($rdn == 2)
        echo '<img src="images/ba.png" alt="바위">';
    elseif($rdn == 3)
        echo '<img src="images/bo.png" alt="보">';
    
    
    //// 승패 판별하여 메시지 보이기 /////
    
    // 1. 비긴경우: 숫자가 같으면 비긴것
    if($rdn == $_GET["res"])
        echo "<h1>비겼쓰~! 다시해~!</h1>";
    // 2. 이긴경우: 내가 이기면된다!
    elseif($rdn == 1 && $_GET["res"] == 2
          || $rdn == 2 && $_GET["res"] == 3
          || $rdn == 3 && $_GET["res"] == 1)
        echo "<h1>당신이 이겼쓰~!!!!</h1>";
    // 3. 진경우: 나머지
    else
        echo "<h1>당신이 졌따뀨~!!!</h1>";
    
    
    
    
    /// 다시하기 버튼 //////
    echo '<br><button onclick="history.back()">다시하기</button>';
    // JS의 history.back() 은 이전 페이지로 가기
    // 브라우저의 이전버튼과 동일한 기능
    // 원래는 window.history.back()
    // window는 보통 생략한다~
    
    
    
    
    ?>
    
    
</body>
</html>