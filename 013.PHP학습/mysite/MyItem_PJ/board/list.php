<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>게시판 리스트 페이지</title>
    <link rel="stylesheet" href="board.css">
</head>

<body>
    <?php
    
    # 읽기모드 여부(값이 "read"이면 읽기모드임)
    $mode = "";
    
    # 글번호(DB레코드 고유번호)
    $read_uno = "";
    
    # 만약 url에 전달값 키가 있다면 읽어서 위의 변수에 담는다!
    if(isset($_GET["mode"])){
        $mode = $_GET["mode"];
    } /////// if ////////////////
    
    if(isset($_GET["read_uno"])){
        $read_uno = $_GET["read_uno"];
    } /////// if ////////////////
    
    // 1. DB연결 문자열 불러오기(맨위에서 한번만 해준다!!!)
    include "DBconn.inc";
    
    
    ##################################################
    #### 만약 $mode가 "read"이면 아래쪽 읽기테이블 출력 ###
    ##################################################
    if(!strcmp($mode,"read")){

        # 0. 조회수 증가하기
        # (1) 조회수 증가를 위한 쿼리문(update)
        $sql = "UPDATE `board_free` 
            SET `hit`= `hit`+1
            WHERE `uno` = $read_uno";
        # (2) 조회수 쿼리 날리기(반영만 하면 끝!)
        $res = $conn->query($sql);
        
        # 1. uno해당 레코드 읽어오기 위한 쿼리문 만들기
        $sql = "SELECT * FROM `board_free` 
                WHERE `uno`= $read_uno";
        
        # 2. 쿼리날리기(실행!)
        $res = $conn->query($sql);
        
        # 3. 결과가져오기
        $row = $res->fetch_assoc();
        
        # 4. DB 컬럼 값 변수처리
        // (1) 글쓴이
        $name = $row["name"];
        // (2) 홈페이지
        $homepage = $row["homepage"];
        // (4) 글 제목
        $subject = $row["subject"];
        // (5) 글 내용
        $content = $row["content"];
        // (6) html사용 여부(체크시 값이 "on"임)
        $html_tag = $row["html_tag"];

        # 문자열 처리하기 PHP 메서드
        # (1) htmlspecialchars(문자열)
        # - 전달된 문자열에 특정한 특수문자를 html에서 
        #   에러가 없도록 변환하는 메서드
        # - 이점: 해커들로 부터 악성코드 공격을 어느정도
        #  방지할 수 있다. 
        #   XSS(크로스 사이드 스크립트) 공격방지 
        # - 변환되는 특수문자:
        #   &(앰퍼센드) -> &amp;
        #   ""(겹따옴표) -> &quot;
        #   ''(홑따옴표) -> &#039;
        #   <(미만) -> &lt;
        #   >(초과) -> &gt;

        # (2) stripslashes(문자열)
        # - DB에 쓰면 안되는 홑따옴표 같은 문자를 역슬래쉬로 
        #   변환 한 것을 반대로 풀어줌!

        # (3) addslashes(문자열) 
        # - DB입력시 사용불가 문자를 역슬래쉬로 
        #   변환해주는 메서드
        # - stripslashes메서드의 반대격

        # (4) nl2br(문자열)
        # - 문자열의 모든 줄바꿈표시를 html 줄바꿈 태그인 <br>
        #   태그로 변환해 주는 메서드

        # 적용하기
        $subject = htmlspecialchars($subject);
        $subject = stripslashes($subject);

        # 글 내용에는 무엇을 적용해야하나?
        #-> 글 제목과 같이 htmlspecialchars,
        #   stripslashes를 동일하게 적용한다
        # 그리고 br태그 변환도 해준다!
        # 단, 대상은 html이 체크되지 않은 것만!!!

        # 글 내용 중 html에 체크되지 않은 것만 적용
        # strcmp(변수,값) 변수와 그 값이 다르면 true
        if(strcmp($html_tag,"on")){
            
            $content = htmlspecialchars($content);
            $content = stripslashes($content);
            $content = nl2br($content);

        } ///////// if문 /////////////////////////
        
        
    ?>

    <table class="dtblview">
        <tr>
            <td>글쓴이</td>
            <td><?=$name?></td>
        </tr>
        <tr>
            <td>홈페이지</td>
            <td><?=$homepage?></td>
        </tr>
        <tr>
            <td>글 제목</td>
            <td><?=$subject?></td>
        </tr>
        <tr>
            <td>글 내용</td>
            <td><?=$content?></td>
        </tr>
    </table>
    <br>
    <table class="dtbl btngrp">
        <tr>
            <td width="375">
                <button><a href="list.php">글 목록</a></button>
                <button class="wbtn"><a href="write.php?mode=form">글 쓰기</a></button>
            </td>
            <td width="375" align="right">
                <button class="wbtn"><a href="modify.php?mode=form&modify_uno=<?=$read_uno?>">글 수정</a></button>
                <button class="wbtn"><a href="delete.php?mode=form&delete_uno=<?=$read_uno?>">글 삭제</a></button>
            </td>
        </tr>
    </table>
    <br>
    
    <?php
        
        
    } /////// if : $mode가 "read"인 경우 ///////////////
    ///////////////////////////////////////////////////
    
    
    
    ?>


    <!--게시판 리스트-->
    <table class="dtbl">
        <caption>방명록 게시판</caption>
        <!--상단 컬럼명 표시영역-->
        <thead>
            <tr>
                <th>번호</th>
                <th>글 제목</th>
                <th>글 쓴이</th>
                <th>등록일자</th>
                <th>조회수</th>
            </tr>
        </thead>



        <?php 
        
        # 1-1. 페이지번호 : 처음로딩시엔 첫페이지이니까 1을 넣어놓는다!
        # 해당 페이지를 GET방식으로 전달할때 사용할 변수
        $no = 1;
        
        # 1-2. 만약 GET 방식으로 넘어오는 값이 있다면 $no에 넣어준다
        # GET방식 변수가 셋팅되었나 검사하는 메서드는? isset()
        if(isset($_GET["no"])){ // 파라미터 키값 no라는 것이 있냐?
            $no = $_GET["no"]; // 넘어온값을 변수에 할당
        } ///////// if /////////////////////////////////////
        
        
        # 2. 한 페이지당 줄수 : 
        #       리스트 한 페이지당 몇 개의 레코드를 보여줄 것인가?
        $linePerPage = 7;
        
        
        // 1. DB연결 문자열 불러오기
        // -> 상단에서 한번 DB연결함!(읽기모드때문에)
        
        /// 2. 전체 테이블 데이터 불러오는 쿼리문 만들기
        $sql = "SELECT * FROM `board_free` ORDER BY `uno` DESC ".
            "LIMIT ".(($no-1)*$linePerPage).",".$linePerPage;
        // LIMIT 0,5 -> 첫 레코드 부터 5개 가져오기
        // ORDER BY `uno` DESC
        // `uno` 등록된 글 번호 내림차순(최신글 맨위!)
        // LIMIT 시작레코드번호,개수 -> 시작레코드번호 부터 몇개
        
        # 시작 레코드 번호는 어떻게 만들 수 있는가?
        
        # 예컨데 한 페이지 당 5개를 보여줄 경우
        # 첫 페이지는 0번 -> 페이지번호 1번
        # 두번째 페이지는 5번 -> 페이지번호 2번
        # 세번째 페이지는 10번 -> 페이지번호 3번
        # 세번째 페이지는 15번 -> 페이지번호 4번
        
        # 시작 레코드번호 계산식 : 
        # 페이지번호, 한 페이지당 줄수를 이용하여 계산!
        # => (페이지번호-1)*한 페이지당 줄수
        # 검증:
        # 1페이지: (1-1)*5 = 0
        # 2페이지: (2-1)*5 = 5
        # 3페이지: (3-1)*5 = 10
        # 4페이지: (4-1)*5 = 15
        
        
        
        /// 3. 쿼리문을 DB에 실행 후 결과를 가져온다!
        //  $res변수에 결과를 담는다!
        // $conn은 DB연결 객체임!
        $res = $conn->query($sql);
        // query() 메서드는 DB연결객체 하위메서드로
        //  연결된 DB에 쿼리를 실행 후 결과까지 가져온다!
        
        /// 4. 실행된 결과의 레코드 개수를 찍어본다!
        // num_rows 속성은 쿼리가 가져온 결과 레코드 개수를 리턴
//        if($res->num_rows>0){
//            echo "<br>전체데이터 개수:".$res->num_rows."개";
//        } ///// if문 /////////////////////
//        else{
//            echo "<br>데이터가 없습니다!";
//        } ///// else ////////////////////
        
        
        ?>




        <!--중앙 레코드 표시부분-->
        <tbody>
            <?php
            
            // 결과 레코드가 있다면!
            if($res->num_rows>0){
                // 긁어모은 데이터가 있는 동안에 반복실행함!
                // 긁어모았다! 영어로 fetch
                // (데이터를) 뺏지! 어서! (격하게 발음)
                
                // fetch_assoc() 메서드
                // - DB 테이블에 컬럼명으로 연관된(associate)
                // 데이터를 가져오는 메서드임!
                
                //while(조건문){실행문} 
                //- > 조건문이 true인동안
                //(여기서는 데이터가 있는동안)
                //    실행문을 실행한다!
                
                //$row = $res -> fetch_assoc()
                //해석: 긁어모은 데이터를 $row변수에 
                //      하나씩 담는다
                
                # 리스트번호: 리스트순번(각 페이지별 시작번호를 구해온다!)
                $lno = 1+(($no-1)*$linePerPage);
                // 1+ 레코드 시작번호(0,5,10,15,...)
                
                while($row=$res->fetch_assoc()){
                    
                    # DB 컬럼 값 변수처리
                    // 1.일련번호
                    $uno = $row["uno"];
                    // 2.제목
                    $subject = $row["subject"];
                    // 3.이름
                    $name = $row["name"];
                    // 4.입력일
                    $register_date = $row["register_date"];
                    // 5.조회수
                    $hit = $row["hit"];
                    
                    
                    # 날짜형식변환: DB에 날짜가 숫자형식으로 되어있음
                    // date(형식,숫자형날짜데이터)
                    // 형식: 년(Y), 월(m), 일(d)
                    $register_date = 
                        date("Y-m-d",$register_date);
                    
                                        
                    echo 
                    "<tr>".
                        // 리스트의 순번을 새로 붙여준다!
                        "<td>$lno</td>".
                        //// 글보기는 리스트페이지다
                        "<td>
                            <a href='list.php?no=$no&mode=read&read_uno=$uno'>$subject</a>
                        </td>".
                        "<td>$name</td>".
                        "<td>$register_date</td>".
                        "<td>$hit</td>".
                    "</tr>";
                    
                    # 리스트번호 증가
                    $lno++;//1씩증가
                    
                    
                } /////// while /////////////////
                
                
            }///// if문 /////////////////
            //// 레코드가 없다면!
            else{
                echo '
                    <tr>
                        <td colspan="5">
                            등록된 글이 없습니다.
                        </td>
                    </tr>
                ';
            } /////// else 문 //////////////
            
        ?>

        </tbody>


        <?php
        ########## 페이징 링크 만들기 ###################
        
        # 페이징 숫자 출력
        $pg = "";
        
        # 전체 레코드 수 구하기 쿼리
        $cnt_sql = "SELECT COUNT(*) FROM `board_free`";
        $total = $conn->query($cnt_sql);//쿼리날리고
        $total = $total->fetch_row();//결과레코드가져오기
        // fetch_row() 데이터 레코드를 배열번호로만 저장!
        
        # 전체 레코드 수
        $total =(int)$total[0];
        
        //echo "전체 레코드 수: $total 개";
        
        # 총 페이지수 : 전체 레코드 수 / 한 페이지당 줄 수
        $totalPage = ceil($total / $linePerPage);
        # -> 단, 결과가 소수점 아래로 나오면 올림처리! ceil()
        # 이유는 남음 레코드는 다음 페이지에 표현해야 하므로
        
        //echo "총 페이지수 : $totalPage 개";
        
        //echo "현재페이지번호: $no";
        
        
        # 총 페이지 수가 0이 아니면 페이징을 만들어라!
        if($total != 0){
      

            # for문을 사용하여 페이징 숫자 링크를 생성한다!
            for($i=1; $i <= $totalPage; $i++){

                # 만약 현재 페이지번호와 같은 것은 링크를 
                # 만들지말고 숫자만 두껍게 찍어준다!
                if($no == $i){ 
                    $pg .= "<b>$i</b>";
                } //////////////////////////////////
                // (int)$no 로 비교한 이유!
                // 처음엔 $no=1 로 숫자를 넣었지만
                // GET방식으로 값을 가져오면 문자형숫자다!
                // 따라서 숫자형으로 형변환해야만 비교가 된다!
                // === 을 사용하면 이렇게 형변환 해야하고
                // == 을 사용하면 형이 달라도 내용만 같으면되므로
                // 형변환 하지 않아도 된다! 여기서는 이것 사용!!!

                else{// 현재 페이지번호와 같이 않은 경우
                    # 페이지 이동 a링크 만들기
                    $pg .= "<a href='list.php?no=$i'>$i</a>";
                    // .=은 문자대입연산자
                    //(기존값에 문자값을 더함)
                } //////////////////////////////////

                # 페이지 번호 사이 구분자 넣기(마지막제외!)
                if($i < $totalPage) $pg .= " | ";

            } ////////// for문 ///////////////////////


        } /////////// if문 ///////////////
        
        
        
        ###############################################
        ?>


        <!--하단 페이징 표시부분-->
        <tfoot>
            <tr>
                <td colspan="5">
                    <!--PHP에서 페이징을 구성하여 표시한다!-->
                    <?=$pg?>

                </td>
            </tr>
        </tfoot>
    </table>

    <br>
    <table class="dtbl btngrp">
        <tr>
            <td>
                <button>
                    <a href="list.php">글 목록</a>
                </button>
                <button class="wbtn">
                    <a href="write.php">글 쓰기</a>
                </button>
            </td>
        </tr>
    </table>




</body>

</html>
