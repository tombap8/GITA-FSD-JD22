<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>PHP 인클루드 연습 - sub4</title>
    <style>
        .box{
            position: relative;
            width: 1000px;
            min-height: 100px;
            margin: 0 auto;
            border: 1px solid #ccc;
        }
        .top img{
            height: 100px;
        }
        .gnb{
            position: absolute;
            right: 10px;
            bottom: 10px;
        }
        .cont{
            height: 400px;
            margin-top: 10px;
            background: url(images/kim.jpg) no-repeat 0/cover;
        }
        .info{
            height: 200px;
            margin-top: 10px;
        }
        .info address{
            font-style: normal;
            font-size: 12px;
            line-height: 28px;
            padding: 50px;
        }
    </style>
</head>

<body>
   <?php 
    /*
        [ 외부파일을 php에 삽입하기 ]
        1. include : 예) <?php include "경로/파일명" ?>
        2. require : 예) <?php require "경로/파일명" ?>
        
        - 위의 두 가지 방법은 html소스 파일에 특정소스를 특정위치에
        삽입하는 php메서드다!
        
        [ include 와 require 의 차이점은? ]
        - 특정파일 호출시 에러가 나면 해당되는 부분만 에러나고 나머지는
        그대로 출력하는 것은 include이다!
        require는 하나만 에러나면 그 하단 소스는 모두 출력하지 않는다!
        
        [ include 방식의 장점은? ]
        - 소스를 하나만 사용하여 관리하므로 유지보수가 쉽다!
        - 반복소스를 줄여주어 코딩량이 감소된다!
        
        [ include 시 사용할 수 있는 파일종류는? ]
        - 대표적으로는 .inc파일을 사용(인클루드 전용파일)
        - 그밖에 html, php 파일도 불러올 수 있다!
    */
    ?>
   
   
    <!--1.탑영역-->
    <?php include "inc/top.inc" ?>
    <!--2.본문영역-->
    <section class="box cont"></section>
    <!--3.하단영역-->
    <?php include "inc/info.inc" ?>
    



</body>

</html>
