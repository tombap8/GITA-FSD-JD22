<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>My Item PJ - 로그인 페이지</title>
    <link rel="stylesheet" href="css/login.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/login.js"></script>
</head>

<body>
    <!--전체박스-->
    <div class="wrap">
        <!--1.상단영역-->        
        <?php include "inc/top.inc" ?>
        
        <!--2.컨텐츠영역-->
        <main id="cont">
            <!--로그인타이틀-->
            <h2 class="tit">로그인</h2>
            <!--로그인박스-->
            <div id="login">
                <form action="process/loginSet.php" method="post" class="logF">
                    <!--아이디박스-->
                    <div class="minput">
                        <label for="mid">아이디</label>
                        <input type="text" name="mid" id="mid">
                    </div>
                    <!--비밀번호박스-->
                    <div class="minput">
                        <label for="mpw">비밀번호</label>
                        <input type="password" name="mpw" id="mpw">
                    </div>
                    <!--버튼영역-->
                    <div class="btnBox">
                        <input type="submit" id="sbtn" value="LOGIN">
                        <!--value는 출력글자-->
                    </div>
                    
                    <!--기타체크링크-->
                    <div class="addBox">
                        <span>
                            <input type="checkbox" id="chkbox" name="chkbox">
                            <label for="chkbox">아이디저장</label>
                        </span>
                        <a href="">아이디찾기</a> | 
                        <a href="">비밀번호찾기</a> | 
                        <a href="">회원가입</a>
                    </div>
                </form>
            </div>
            <!--
            [ form 요소 ]
            - 입력된 데이터를 묶어서 서버로 전송하는 역할
            - action 속성 : 서버전송 페이지 주소
            - method 속성 : 전송방식 선택(get/post)
            
            [ input 요소 ]
            - 사용자가 입력할 수 있도록 입력양식을 제공하는 요소
            - type 속성 : 여러가지 입력양식을 선택함
                1) text - 글자입력
                2) password - 비밀번호입력(입력시 글자표시숨김)
                3) radio - 라디오버튼(보통 단일선택시 사용)
                4) checkbox - 체크박스버튼(보통 다중선택시 사용)
                5) button - 버튼형식의 입력폼
                6) submit - form요소의 입력값을 전송하는 기능
                        (action에 지정된 페이지로 데이터를 보낸다)
                7) 기타 html5에서 새로이 등장한 type들
                - search, tel, email, range, image ....
                - 기존에 일반 text입력으로 처리했던 데이터를 세분화하여
                내부 검사기능 또는 날짜입력 달력 제공, 범위셋팅 등 기능을
                더욱 보강함
            
            - maxlength 속성 : 최대 입력 글자수 지정
            - placeholder 속성 : 입력창에 안내문구 출력(입력시 사라짐)
            
            ※ input 요소에 name 속성으로 이름을 지정하는 이유는?
                - action에 지정된 서버전송 페이지에서 입력값을 읽을때
                name에 지정된 이름으로 값을 구별하여 읽기때문이다!
                (편의상 name값은 id값과 동일하게 하는 경우가 많다)
            
            [ label 요소 ]
            - input 요소의 설명을 표시함
            - 라벨요소는 웹접근성 필수 요소임. 반드시 표시할것!
            - for 속성 : input요소의 id명을 for값으로 설정하면
                        클릭시 해당 id의 input요소로 포커스가 이동함
            -->

        </main>
        
        <!--3.하단영역-->        
        <?php include "inc/info.inc" ?>
    </div>



</body></html>