<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>드라마 데이터 수정하기</title>
    <style>
        body{
            text-align: center;
        }
        
        label{
            display: block;
            margin-top: 15px;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
    $(function(){ /// jQB //////////////////
        $("#sbtn").click(function(e){
            
            // 전송기능막기!
            e.preventDefault();
            
            // 각 항목이 비었는지 검사하기
            let res=true;//검사결과
            // 흰손수건의 법칙! 한번만 false여도 false!
            
            $("input[type=text]").each(
                function(idx,ele){
                //console.log("순번:"+idx);
                    
                // 각 입력양식 값이 빈값여부체크
                if($(ele).val().trim()==="") 
                    res = false;
                                        
            });////// each /////////
            
            console.log("검사결과:"+res);
            
            /// 검사결과 모든 항목이 통과면 서브밋하기
            if(res){
                $("#dform").submit();
                // 서브밋하면 form요소에 action속성에 지정된 
                // 페이지로 데이터와 함께 이동한다!
                // 서브밋(submit)은 "데이터 전송"의 의미를 가짐!
            }/////// if //////////
            /// 불통과시 메시지 보이기 /////
            else{
                alert("모든항목이 필수입니다!");
            }/////// else ////////////
            
            
        });////// click //////////////
        
        ///// 삭제하기 버튼 클릭시 ////////
        $("#dbtn").click(function(){
            
            let conf = confirm("정말 삭제하시겠습니까?");
            // confirm(메시지) 
            // - "확인"시 true, "취소"시 false 리턴
            console.log("삭제여부:"+conf);
            
            // 분기하기 (true일경우)
            if(conf){
                //console.log("process/del.php?num="+$("#num").val());
                location.href = "process/del.php?num="+$("#num").val();
            } //////// if /////////////
            
        });///////// click /////////////
        ////////////////////////////////
        
        /// 리스트로 돌아가기 버튼 //////
        $("#lbtn").click(function(){
            location.href = "dramaTable.php";
        });////////// click ////////////////
        ////////////////////////////////////
        
        
        
    });////////// jQB //////////////////////
    </script>
</head>
<body>
   <h1>드라마 데이터 수정하기</h1>
   
   <?php 
        # 수정할 레코드는 GET방식으로 URL을 통해 전달된 키=값 쌍이다!
        # PHP에서 GET방식의 값을 받는 방법은 
        # $_GET[키이름]
        # 그리고 URL로 전달하지 않는 경우는 돌아가도록 처리
    
        # GET방식으로 특정키가 있는지 여부를 조사하는 메서드는?
        # isset(변수) - 변수에 할당되었으면 1을 리턴한다!
        # 이것을 if문에 사용하면 에러를 방지할 수 있다!
    
        # num 키가 있으면 처리!!!
        if(isset($_GET["num"])){ 
        
            // 1. DB연결 문자열 불러오기
            include "DBconn.inc";

            /// 2. 해당 테이블 데이터 불러오는 쿼리문 만들기
            # 쿼리문은 DB에서 직접확인한다!!!
            $sql = "SELECT * FROM `drama_info` WHERE `idx`=".
                $_GET["num"];

            /// 3. 쿼리문을 DB에 실행 후 결과를 가져온다!
            $res = $conn->query($sql);            
            
            /// 4. 만약 데이터가 없으면 다시 돌아감!
            if($res -> num_rows === 0){
                echo '
                    <script>
                        location.href = "dramaTable.php";
                    </script>
                ';
            } ////// if ////////////////////////
            
            /// 5. 실행된 쿼리 결과집합에서 데이터 가져오기
            $row = $res -> fetch_assoc();
            // (데이터를) 뺏지! 어서! 
            // -> fetch_assoc() 컬럼명으로 가져옴!
            
            
        } /////////////// if ///////////////////
        
        # 없으면 돌아가! JS로 처리하여 되돌아감!
        else{
            echo '
                <script>
                    location.href = "dramaTable.php";
                </script>
            ';
        } /////////// else ///////////////////
        
    ?>
   
   <form action="process/mod.php" method="post" id="dform">
       <label for="dname">드라마명</label>
       <input type="text" name="dname" id="dname" maxlength="100" value="<?=$row["dname"]?>">
       <label for="actors">주연</label>
       <input type="text" name="actors" id="actors" maxlength="100" value="<?=$row["actors"]?>">
       <label for="broad">제작사</label>
       <input type="text" name="broad" id="broad" maxlength="50" value="<?=$row["broad"]?>">
       <label for="gubun">구분</label>
       <input type="text" name="gubun" id="gubun" maxlength="10" value="<?=$row["gubun"]?>">
       <label for="stime">방영시간</label>
       <input type="text" name="stime" id="stime" maxlength="50" value="<?=$row["stime"]?>">
       <label for="total">방영횟수</label>
       <input type="text" name="total" id="total" maxlength="20" value="<?=$row["total"]?>">
       
       <!--히든필드!!! "idx"컬럼값 넣기(POST방식으로 함께보냄)-->
       <input type="hidden" name="num" id="num" value="<?=$_GET["num"]?>">
       
       <br><br>       
       <input type="submit" value="수정하기" id="sbtn">
       <!--
           form요소 내부의 submit버튼을 클릭하면
           form요소에 셋팅된 action속성의 페이지로
           전송된다!
       -->
        <!--삭제하기 버튼-->
       <input type="button" value="삭제하기" id="dbtn">
       
       <br><br>
       <!--리스트로 돌아가기-->
       <input type="button" value="리스트로 돌아가기" id="lbtn">
   </form>
   
   
   
   
   
   
    
</body>
</html>