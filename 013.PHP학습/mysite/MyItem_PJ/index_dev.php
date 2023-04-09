<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>My Item PJ</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
</head>

<body>
    <?php 
    # 세션 변수가 셋팅되었는지 검색하려면 먼저 세션을 시작해야함!!!
    session_start();
    # 세션 시작 코드를 맨위에 넣도록하자!
    # 이유는 세션 시작코드가 html코드를 모두 감싸는
    # 유형의 셋팅을 하는데 다른 코드가 위에 있으면
    # 페이지에서 세션영역이 분리되어 한번 세션이
    # 시작되고 다시 세션을 요청하는 오류 발생할 수가 있다!
   
    ?>

    <script>
        /*/////////////////////////////////////////////////
        함수명: loginSet
        기능: PHP코드에서 세션변수로 셋팅된 값을 화면에 반영한다
      */ /////////////////////////////////////////////////
        function loginSet(msg, auth) { // msg-메시지, auto-권한
            // PHP에서 이 함수를 호출할 예정!
            // 따라서 내부의 실행코드는 html이 로딩된 후 실행해야함!
            // 그래서 반드시 제이쿼리 실행구역으로 싸줘야함!!!
            $(function() { /// jQB //////////////////

                // 콘솔창에 전달값을 찍어봄!
                console.log(msg + "/" + auth);

                // 1. 로그인 환영 메시지 출력하기
                $("#loginMsg").text(msg);

                // 2. 로그인 버튼을 로그아웃 버튼으로 변경하기
                // 대상: .tmenu li:eq(1) a
                $(".tmenu li").eq(1).find("a").text("로그아웃")

                    // 3. 로그아웃 클릭시 로그아웃하기
                    .click(function() {

                        // 비동기통신으로 로그아웃 처리 페이지호출!
                        // Ajax - $.post() 로 처리!
                        // $.post(호출페이지, 전달변수셋팅, 콜백함수)
                        $.post(
                            // 1. 호출페이지
                            "process/logOut.php",
                            // 2. 전달변수셋팅
                            {},
                            // 3. 콜백함수
                            function(res) { // res-결과값

                                res = res.trim(); //앞뒤공백제거(혹시)

                                if (res === "ok") {

                                    // 메시지
                                    alert("안전하게 로그아웃 되었습니다!");

                                    // 첫페이지로 리로드
                                    location.replace("index.php");

                                } ////// if ////////////////
                                else {

                                    // 메시지
                                    alert("로그아웃시 문제가 발생하였습니다!" + res);

                                } ///// else ///////////////


                            } /// 콜백함수 ///////

                        ); ///////// Ajax - post /////////



                    }); ///// click /////////////////////

                // 4. 회원가입 버튼 제거하기
                // 대상: .tmenu li:eq(0)
                $(".tmenu li").first().remove();

                // 5. auth 권한 값이 "A"일 경우 
                //    "관리자" 메뉴 생성하여 추가하기
                if (auth === "A" || auth === "S") {
                    $(".tmenu")
                        .append(
                            "<li><a href='admin/index.php'>관리자</a></li>");
                } /////////// if /////////////////



            }); ////////// jQB //////////////////////

        } ////////// loginSet 함수 /////////////////////////
        //////////////////////////////////////////////////

        /// 로그인 메시지 박스 만들기 ////
        $(function() { /// jQB //////////////////
            // 1. 상단영역(#top)에 로그인 박스넣기
            $("#top").append('<div id="loginMsg"></div>');
            // 2. 로그인 박스 CSS 디자인하기
            $("#loginMsg").css({
                position: "absolute",
                width: "400px",
                height: "50px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "14px",
                fontWeight: "bold",
                lineHeight: "50px",
                textAlign: "center",
                whiteSpace: "nowrap"
            }); ////// css //////////


        }); ////////// jQB //////////////////////

    </script>

    <?php     
    # 세션변수가 셋팅된 경우에만 로그인 상태변경 실행
    # $_SESSION["mid"] 아이디 세션변수가 셋팅되었는가?
    # isset(변수) -> 변수값이 셋팅된 여부를 판별(셋팅시 1리턴)
    if(isset($_SESSION["mid"])){
        
        // 메시지
        $msg = $_SESSION["name"]."님, 환영합니다!";
        
        // 권한
        $auth = $_SESSION["auth"];
        
        // 로그인 셋팅 JS함수 호출하기!!!
        echo "<script>loginSet('$msg','$auth');</script>";
        
        //echo "<script>alert('".$msg."');</script>";
    } ////////// if문 ///////////////////////
    
    
    ?>

    <!--전체박스-->
    <div class="wrap">
        <!--1.상단영역-->
        <?php include "inc/top.inc" ?>

        <!--2.컨텐츠영역-->
        <main id="cont">
            <h2 class="dn">메인페이지 아이템 소개</h2>
            <!--큰 메인이미지 박스-->
            <div class="mimg">
                <img src="images/iphone6.png" alt="아이폰6플러스">
            </div>
            <!--썸네일이미지박스-->
            <div class="thumbs">
                <ol>
                    <li>
                        <a href="">
                            <img src="images/small/iphone6.png" alt="아이폰6플러스">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="images/small/macbook.png" alt="맥북에어">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="images/small/shoes.png" alt="구두">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="images/small/watch.png" alt="시계">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="images/small/bag.png" alt="가방">
                        </a>
                    </li>
                </ol>
            </div>

        </main>

        <!--3.하단영역-->
        <?php include "inc/info.inc" ?>

    </div>



</body>

</html>
