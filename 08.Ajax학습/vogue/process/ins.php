<?php
########## 회원가입 입력처리 페이지 ############
# member.php 페이지에서 POST방식으로 넘어온 데이터 받기

// 1.아이디
$mid = $_POST["mid"];
// 2.비번
$mpw = $_POST["mpw"];
// 3.이름
$mnm = $_POST["mnm"];
// 4.성별
$gen = $_POST["gen"];
// 5-1.이메일 앞주소
$email1 = $_POST["email1"];
// 5-2.이메일 뒷주소
$seleml = $_POST["seleml"];
// 5-3.직접입력 이메일 뒷주소
$email2 = $_POST["email2"];

/// 비밀번호는 암호화 하여 입력해야한다!!!
// PHP의 암호와 방식 중 하나!
// password_hash(일반문자비밀번호, PASSWORD_DEFAULT)
// 같은 비번이라도 만들때 마다 다른문자로 생성된다!
// 따라서 일반적인 복호화는 불가능하다!

// 암호화된 비밀번호로 변환하여 다시 할당!
$mpw = password_hash($mpw, PASSWORD_DEFAULT);

//echo "1.아이디 : $mid<br>";
//echo "2.비번 : $mpw<br>";
//echo "3.이름 : $mnm<br>";
//echo "4.성별 : $gen<br>";
//echo "5-1.이멜앞 : $email1<br>";
//echo "5-2.이멜뒷 : $seleml<br>";
//echo "5-3.직접입력 : $email2<br>";

/// 이메일 뒷주소 정하기 ///
$emailback;// 최종결정 이메일 뒷주소
$seleml === "free" ? 
    $emailback = $email2 : $emailback = $seleml;
// JS와 동일한 형식의 삼항연산자(조건연산자)
// 비?집:놀이동산;
// 해석: 선택박스값이 "free"이면 이메일 직접입력값 넣고
//      아니면 이메일 선택값을 넣어준다!

//echo $email1."@".$emailback;

// INSERT 쿼리문 만들기
$sql = "INSERT INTO `member`
(`mid`, `mpw`, `name`, `gen`, `email1`, `email2`) 
VALUES 
('$mid','$mpw','$mnm','$gen','$email1','$emailback')";

//echo $sql;

####### DB연결하기 !!! ######
include "dbcon.inc";
############################

// 쿼리를 DB에 실행하여 결과를 가져온다!
// query() 메서드는 쿼리를 DB에 실행후 결과를 가져옴!
$insSts = $conn->query($sql);

// 결과가 나온경우 처리 ///////////
if($insSts){
    echo "ok";
} ///////// if문 ///////////////////////
else{ // 에러가 난 경우 처리 ///////
    echo "error:".$conn->error;
} ////////// else문 /////////////////////

// 보통 페이지가 종료되면 자동으로 연결을 끊어주지만
// 연결을 종료하는 메서드가 있기에 이를 호출해도 된다!
// close() 메서드
$conn->close();







?>