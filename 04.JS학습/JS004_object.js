// 객체셋팅 JS 파일
var MY_SJ = {
    //1. 영화선정
    title: "미나리",
    //2. 감독
    director: "정이삭",
    //3.배우
    actors: "윤여정",
    //4.장르
    genre: "드라마",
    //5.관람가
    ratings: "12세관람가",
    //6.예고편
    trailer: function () {
        // 영화박스에 iframe넣기 
        // body끝에 div넣기!
        document.body.innerHTML +=
            '<div id="mv">' +
            '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/lPYxbbKYYmE?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
            '<span class="cbtn">×</span>' +
            '</div>';

        // 삽입된 동영상 박스 CSS설정하기
        var mv = document.getElementById("mv");
        mv.style.position = "fixed";
        mv.style.top = "50%";
        mv.style.left = "50%";
        mv.style.transform = "translate(-50%,-50%)";
        mv.style.width = "700px";
        mv.style.height = "450px";

        // 닫기버튼 셋팅
        var cbtn = document.getElementsByClassName("cbtn")[0];
        // 클래스요소를 선택할때 순번선택필수! (컬렉션순번 첫번째0)
        cbtn.style.position ="absolute";
        cbtn.style.top ="0";
        cbtn.style.right ="-70px";
        cbtn.style.width ="50px";
        cbtn.style.height ="50px";
        cbtn.style.background ="blue";
        cbtn.style.textAlign ="center";
        cbtn.style.fontSize ="40px";
        cbtn.style.fontWeight ="bold";
        cbtn.style.color ="white";
        cbtn.style.borderRadius ="50%";
        cbtn.style.curssor ="pointer";
        cbtn.style.lineHeight ="40px";


        // 닫기버튼 클릭시 리로드
        cbtn.onclick = function(){
            window.location.reload();
            // 페이지 새로고침!
        }; ////////// click이벤트 함수 ///


    } ///////trailer 함수 //////////
} ////////MY_SJ객체 /////////

var MV_KJS = {
    // 1. 영화제목
    title: "크루엘라",
    // 2. 감독
    director: "크레이그 질레스피",
    // 3. 배우
    actors: "엠마스톤,엠마톰슨",
    // 4. 장르
    genre: "범죄,코미디",
    // 5. 관람가
    ratings: "12세관람가",
    // 6. 예고편
    trailer: function(){
        // 영화박스에 iframe넣기
        // body끝에 div넣기!
        document.body.innerHTML += 
        '<div id="mv">' +
        '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yfSMTFzw-Kw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
        '<span class="cbtn">×</span>' +
        '</div>';

        // 삽입된 동영상 박스 css 설정하기
        var mv = document.getElementById("mv");
        mv.style.position = "fixed";
        mv.style.top = "50%";
        mv.style.left = "50%";
        mv.style.transform = "translate(-50%, -50%)";
        mv.style.width = "700px";
        mv.style.height = "450px";

        // 닫기버튼 셋팅
        var cbtn = document.getElementsByClassName("cbtn")[0];
        // 클래스요소를 선택할때 순번선택필수!
        // (컬렉션순번 첫번째0)
        cbtn.style.position = "absolute";
        cbtn.style.top = "0";
        cbtn.style.right = "-70px";
        cbtn.style.width = "50px";
        cbtn.style.height = "50px";
        cbtn.style.lineHeight = "40px";
        cbtn.style.background = "blue";
        cbtn.style.textAlign = "center";
        cbtn.style.fontSize = "40px";
        cbtn.style.fontWeight = "bold";
        cbtn.style.color = "white";
        cbtn.style.borderRadius = "50%";
        cbtn.style.cursor = "pointer";
        
        // 닫기버튼 클릭시 리로드
        cbtn.onclick = function(){
            window.location.reload();
            // 페이지 새로고침! //
        }; //click이벤트함수//
        
    }//// trailer 함수 //////
    

}; ///// MV_KJS 객체 /////

var MV_LJY = {
    // 1. 영화제목
    title: "뷰티인사이드",
    // 2. 감독
    director: "백종열",
    // 3. 배우
    actors: "한효주,이진욱",
    // 4. 장르
    genre: "멜로/로맨스",
    // 5. 관람가
    ratings: "12세 관람가",
    // 6. 예고편
    trailer: function () {
        // 영화박스에 iframe 넣기
        // body끝에 div넣기!
        document.body.innerHTML +=
            '<div id="mv">' +
            '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ESPFTY8Y-xM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
            '<span class="cbtn">×</span>' + '</div>';

            // 삽입된 동영상 박스 CSS설정하기!
            var mv = document.getElementById("mv");
            mv.style.position = "fixed";
            mv.style.top = "50%";
            mv.style.left = "50%";
            mv.style.transform = "translate(-50%,-50%)";
            mv.style.width = "700px";
            mv.style.height = "450px";
            
            // 닫기버튼 셋팅
            var cbtn = document.getElementsByClassName("cbtn")[0];
            // 클래스요소를 선택할때 순번선택필수!
            // (컬렉션순번 첫번째0)
            cbtn.style.position = "absolute";
            cbtn.style.top = "0";
            cbtn.style.right = "-70px";
            cbtn.style.width = "35px";
            cbtn.style.height = "35px";
            cbtn.style.background = "blue";
            cbtn.style.textAlign = "center";
            cbtn.style.fontSize = "40px";
            cbtn.style.fontWeight = "bold";
            cbtn.style.color = "white";
            cbtn.style.borderRadius = "50%";
            cbtn.style.cursor = "pointer";
            cbtn.style.lineHeight = "40px";
            
            // 닫기버튼 클릭시 리로드!
            cbtn.onclick = function(){
                window.location.reload();
                // 페이지 새로고침!

            }; ////// click이벤트 함수 /////

    } /// trailer 함수 /////

}; ///// MV_LJY 객체 //////

var MV_CRJ = {
    // 1. 영화제목
    title: "비와 당신의 이야기",
    /////MV_CRJ객체//////
    // 2. 감독
    director: "조진모",
    // 3. 배우
    actors: "강하늘, 천우희",
    // 4. 장르
    genre: "드라마, 멜로/로맨스",
    // 5. 관람가
    ratings: "전체관람가",
    // 6. 예고편
    trailer: function(){
        // 영화박스에 iframe 넣기
        // body 끝에 div 넣기!
        document.body.innerHTML +=
        '<div id="mv">' +
            '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/p6j5IqJw5Ck"?autoplay=1 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
            '<span class="cbtn">×</span>' +
            '</div>';

            // 삽입된 동영상 박스 css 설정하기!
            var mv = document.getElementById("mv");
            mv.style.position ="fixed";
            mv.style.top = "50%";
            mv.style.left = "50%";
            mv.style.transform = "translate(-50%,-50%)";
            mv.style.width = "700px";
            mv.style.height = "450px";

            // 닫기버튼 셋팅
            var cbtn = document.getElementsByClassName("cbtn")[0];
            // 클래스요소를 선택할때 순번선택필수!(컬렉션순번 첫번째0)

            cbtn.style.position = "absolute";
            cbtn.style.top = "0";
            cbtn.style.right = "-70px";
            cbtn.style.width = "50px";
            cbtn.style.height = "50px";
            cbtn.style.background = "royalblue";
            cbtn.style.textAlign = "center";
            cbtn.style.fontSize = "40px";
            cbtn.style.fontWeight = "bold";
            cbtn.style.color = "white";
            cbtn.style.borderRadius = "50%";
            cbtn.style.cursor = "pointer";
            cbtn.style.lineHeight = "40px";
            
            // 닫기버튼 클릭시 리로드!
            cbtn.onclick = function(){
                window.location.reload();
                // 페이지 새로고침!
            }; //// click 이벤트함수 ///

    } /// trailer 메서드함수 ///
}; ////// MV_CRJ객체 ////

var MV_ASH = {
    // 1.영화제목
    title: "컨저링 3: 악마가 시켰다",
    // 2.감독
    director: "마이클 차베즈",
    // 3.배우
    actors: "베라 파미가, 패트릭 윌슨",
    // 4.장르
    genre: "공포, 미스터리, 스릴러",
    // 5.관람가
    ratings: "15세 관람가",
    // 6.예고편
    trailer: function () {
        // 영화박스에 iframe 넣기
        // body 끝에 div 넣기
        document.body.innerHTML += '<div id = "mv">' +
            '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MRY26k7sUkY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
            '<span class="cbtn">×</span>' +
            '</div>';

        // 삽입된 동영상 박스 CSS설정하기
        var mv = document.getElementById("mv");
        mv.style.position = "fixed";
        mv.style.top = "50%";
        mv.style.left = "50%";
        mv.style.transform = "translate(-50%,-50%)";
        mv.style.width = "700px";
        mv.style.height = "450px";

        // 닫기버튼 셋팅
        var cbtn = document.getElementsByClassName("cbtn")[0];
        // 클래스요소를 선택할 때 순번선택필수! (컬렉션 순번 첫번째 0)
        cbtn.style.position = "absolute";
        cbtn.style.top = "0";
        cbtn.style.right = "-70px";
        cbtn.style.width = "50px";
        cbtn.style.height = "50px";
        cbtn.style.background = "blue";
        cbtn.style.textAlign = "center";
        cbtn.style.fontSize = "40px";
        cbtn.style.fontWeight = "bold";
        cbtn.style.color = "white";
        cbtn.style.borderRadius = "50%";
        cbtn.style.cursor = "pointer";
        cbtn.style.lineHeight = "40px";

        // 닫기버튼 클릭시 리로드
        cbtn.onclick = function () {
            window.location.reload();
            // 페이지 새로고침
        };
    }
}; ///// MV_PSH객체 ///////