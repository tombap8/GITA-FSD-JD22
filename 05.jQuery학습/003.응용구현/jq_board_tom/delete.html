<!DOCTYPE HTML>
<html lang="utf-8">
 <head>
  <title> 방명록 게시판 - 글 삭제 </title>
  <meta charset="utf-8">
  <meta name="Generator" content="EditPlus">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <link rel="stylesheet" type="text/css" href="board.css">
    <script language = "javascript">
    function check_form(form) {
        if(!delete_form.passwd.value) {
        alert('패스워드를 입력하세요.');
        delete_form.passwd.focus();
        return;
        }

        delete_form.submit();
    }
    </script>
 </head>

 <body>
<?php
    # DB 연결하기
    include "DBconn.inc";

    # 처리모드
    $mode = "";

    if(isset($_GET["mode"])){
        $mode = $_GET["mode"];
    } ////// if //////////////

    //echo $mode;

    # 레코드번호
    $delete_uno = "";

    if(isset($_GET["delete_uno"])){
        $delete_uno = $_GET["delete_uno"];
    } ////// if //////////////

    # 처음에 페이지 열때 : $mode 값이 "form"일때
    if(!strcmp($mode,"form")){

        # 사용자명 쿼리
        $sql = "SELECT `name` FROM `board_free` WHERE `uno` = $delete_uno";

        # 쿼리 날리기 : query() 메서드사용
        // $conn은 mysqli() 의 DB연결객체임!
        $res = $conn->query($sql);

        # 결과 레코드 가져오기 : fetch_assoc() 메서드 사용
        $row = $res->fetch_assoc();

        # "사용자명" 데이터 변수에 할당
        $name = $row["name"];

?>
  <form name = "delete_form" method = "post" 
  action = "delete.php?mode=post&delete_uno=<?=$delete_uno?>">
    <table class="dtbl">
	<caption>방명록 게시판 - 글 삭제</caption>       
     <tr> 
        <td align = "center">
          <b><?=$name?></b> 님의 글을 삭제합니다.
        </td>
      </tr>
      <tr> 
        <td height = "50" align = "center">
          패스워드
          <input type = "password" name = "passwd" size = "20">
        </td>
      </tr>
    </table>
    <br>
    <table class="dtbl btngrp">      
      <tr>      
        <td align = "center">   
          <input type = "button" onclick = "check_form();" value = "입력 확인">
          <input type = "button" onclick = "form.reset();" value = "다시 쓰기">
          <input type = "button" onclick = "location.href='list.php'" value = "취소 하기">
        </td>
      </tr> 
    </table> 
  </form>   

  <?php
    } /////// $mode가 "form"일때 //////////////////////

    # 삭제하기 : $mode가 "post"일때 ///////////////////
    elseif(!strcmp($mode,"post")){

        # 입력한 비밀번호 확인하기! : modify.php의 비번비교과 같음!
        // 쿼리문 만들기
        $sql = "SELECT `passwd` FROM `board_free` 
                WHERE `uno`= $delete_uno";

        //echo " / 쿼리문 : ".$sql;

        # 쿼리 날리기
        # $conn->query(쿼리문)
        $res = $conn->query($sql);

        # 1. 레코드 유무 판별
        # $res->num_rows 결과레코드 개수를 담은 속성
        $cnt = $res->num_rows;

        //echo " / 레코드개수: $cnt";

        # 2.레코드 개수가 1인 경우 비밀번호 비교하기
        if($cnt){
            
            # $res->fetch_assoc() : 
            # 결과집합의 레코드를 이름으로 가져온다!
            $row = $res->fetch_assoc();

            //echo " / DB비밀번호 : ".$row["mpw"];
            
            # 비번비교하기
            # password_verify(입력된비번, DB해시비번)
            
            //echo " / 비번검증 : ".
            //    password_verify($mpw,$row["mpw"]);

            # POST방식으로 넘겨 받은 입력된 비번
            $passwd = $_POST["passwd"];
            
            # 비번검증
            $allow = password_verify($passwd,$row["passwd"]);
            ###################################
            # 비번검증 결과 통과시 세션을 시작하고 #
            # 세션변수에 개인정보할당
            if($allow){
                // echo "삭제 허용!";

                # 쿼리문 만들기
                $sql = "
                DELETE FROM `board_free` 
                WHERE `uno`= $delete_uno";
                
                //echo $sql;
                
                # 쿼리문 날리기(실행), 변수에 결과담기
                $res = $conn->query($sql);
                
                # 성공시 리스트페이지로 가기
                if($res){
                    echo "
                        <script>
                            alert('작성하신 글이 삭제되었습니다!');
                            location.replace('list.php');
                        </script>
                    ";
                } ///////////// if /////////////////
                else{
                    echo $conn->error;
                } ///////////// else //////////////////



            } /////// if //////////////////////
            
            # 비밀번호 불통과시 ##################
            else{
                
                echo "
                    <script>
                        alert('비밀번호가 일치하지 않습니다!');
                        history.back();
                    </script>
                ";
                
            } /////// else /////////////////////
            
            
            
        } ////////// if문 //////////////////////
       


    } ///////////// $mode가 "post"일때 ///////////////////

  ?>


 </body>
</html>