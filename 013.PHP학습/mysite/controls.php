<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP 제어문 연습(배열, 연관배열)</title>
    <style>
        img {
            width: 50px;
        }

    </style>
    <script>
        //버튼을 클릭하면 입력된 숫자를 가지고 Get방식으로
        // 자기자신 페이지 다시 호출하기~!
        window.addEventListener("load", function() {

            document.querySelector('.btn')
                .onclick = function() {

                    location.href = "controls.php?num=" +
                        document.querySelector('.txt').value;

                }; ////// onclick //////////////


        }); /////////// load //////////////////////

    </script>
</head>

<body>
    <?php
    
    // 일반적인 배열
    $tit = [
        "안녕하세요? 나는 눈누난납니다!",
        "하이! 모두 잘 지내니?",
        "오늘도 즐거운 하루 되시길~!!!"
    ];
    
    // 배열순번랜덤수
    $rdn = rand(0,2);
    /*
    [연관배열(associative array)]
    
    JS 의 객체와 비슷하지만 이것은 단지
    배열에 이름을 붙여서 쓸 수 있게 한것임!
        
        변수 = [
            별칭 => 값,
            별칭 => 값, ...
        ];
    
    연관배열의 호출은
        
        변수[별칭]
    */    
        
    $isrc = [
        "마을"=>"images/01.png",
        "별밤"=>"images/02.png",
        "카페"=>"images/03.png",
        "바다"=>"images/04.png"
    ];
    
    // 일반적인 for문 사용하기
    //for(시작값;한계값;증감){코드}
    /*
    for문 내부에서 사용하는 2가지 키워드
    1) continue 를 만나면 아래 코드 실행안하고 위로 
        올라가서 for문을 계속 돈다!
    2) break 를 만나면 for문을 빠져 나간다!
    -> 보통 조건문if와 같이 사용된다!
    */
    // 내가 좋아하는 숫자 찍기
    
    //내가 좋아하는 숫자 변수
    $mynum = "";
    
    // 여기서 3,7,8번을 찍으려고 함!
    for($x = 0 ; $x <= 9 ; $x++){
        
        if($x==0 || $x==1 || $x==2 || $x==4 ||
           $x==5 || $x==6 || $x==9 ){
            continue; // 해당번호 아래코드로 안감!
        }////// if ///////////////////////////
        
        $mynum .= $x;
        // .= 은 문자대입연산자
        
        if($x==8) break; //여기서 for문 나감!
        
        $mynum .= ",";
    } ////// for 문 /////////
    
   
    
    
    
    
    
    // 이미지 출력용변수
    $prt = "";
    
    //echo isset($_GET["num"]);
    
    // PHP에서 get방식 파라미터 변수가 셋팅됐는지 확인하는
    // 방법은?
    // isset(변수/함수리턴값)
    // 만약 셋팅이 된 경우엔 리턴값 1
    // 이것으로 if문을 사용하여 에러방지!!!
    
    if(isset($_GET["num"])){
        // 변수에 넘어온 숫자값 넣기
        $txt = $_GET["num"];
        //echo $txt;
        
        // 넘어온 문자형 숫자를 잘라서 배열에 넣기!
        $txt = str_split($txt);
        //print_r($txt);
        
        //str_split() 메서드 사용!
        //-> 문자를 한글자씩 잘라서 배열에 넣어준다
        
        //print_r() 메서드
        //-> 배열에 담긴 값을 확인하는 방법
        
        // 배열에 담긴 문자형 숫자를 이미지로 변경하기
        // .= 문자대입연산자(기존값에 더함)
        foreach($txt as $val){
            //$prt .= '<img src="num/num_0'.$val.'.png" alt="number">';
            $prt .= "<img src=\"num/num_0$val.png\" alt=\"number\">";
        }/////// foreach문 ////////////
        
        /*
        이스케이프 문자처리(역슬래쉬)
        -> 쌍따옴표안의 쌍따옴표, 홑따옴표 안의 홑따옴표
        -> \"  \'
        */
        
        //foreach문
        /*
        foreach(배열 as 변수){반복코드구역}
        -> 배열을 순서대로 돌면서 값을 변수에 담아서
            반복코드구역으로 전달한다!
        */
        
    } ///// if //////////////////
    
    /*
    [ for문 외의 반복문 ]
    
    while(조건){반복코드구역}
    -> 조건에 맞는 동안 반복코드구역이 실행됨!
        
    do{반복코드구역}while(조건)
    -> 먼저 한번 실행 후 조건이 맞으면 반복실행함!
    */

    
    
    
    
    
    ?>

    <h1>PHP 제어문 연습</h1>
    <h2>입력된 숫자를 이미지로 출력하기</h2>

    <h2><?=$tit[$rdn]?></h2>
    <figure>
        <img src="<?= $isrc["카페"] ?>" alt="오늘의 이미지" style="width:auto;">
    </figure>

    <h2>0~9중에 내가 좋아하는 숫자는 <?=$mynum?>다!</h2>

   <h2>숫자를 쓰고 변환버튼을 누르면 이미지로 바뀐다!</h2>
    <input type="text" class="txt">
    <button class="btn">이미지로 변환하기</button>
    <br>
    <?=$prt?>
    

</body>

</html>
