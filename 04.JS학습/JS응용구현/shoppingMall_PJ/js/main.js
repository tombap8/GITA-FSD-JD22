// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
    // 1. 호출확인
    console.log("로딩완료!");

    // 광클금지 상태변수
    let prot = 0; // 0-허용, 1-불허용

    // 2. 대상선정
    // 2-1. 이벤트대상: .abtn
    const abtn = document.querySelectorAll(".abtn");
    // 2-2. 변경대상: #slide
    const slide = document.querySelector("#slide");
    // 2-3. 블릿변경대상: .indic li
    const indic = document.querySelectorAll(".indic li");

    // 3. 이벤트 설정하기 및 기능구현
    // 3-1. 오른쪽 버튼 클릭시
    abtn[1].onclick = () => {
        // 광클금지 ////////////
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 800);
        ////////////////////////////

        slide.style.left = "-100%";
        slide.style.transition = ".8s ease-in-out";
        // 0.8초후 맨앞li 잘라서 맨뒤로 이동!
        setTimeout(() => {
            // 1. 맨앞li 잘라서 맨뒤로 이동!
            slide.appendChild(slide.querySelectorAll("li")[0]);
            // 2. left값 0으로 초기화!
            slide.style.left = "0";
            /* 3. 트랜지션 없애기 */
            slide.style.transition = "none";
        }, 800);

        // 블릿변경함수 호출!
        // -> 오른쪽버튼은 두번째 슬라이드가 주인공!
        chgIndic(1);

        // 자동넘김지우기 함수 호출!
        clearAuto();
    }; //////////// click ////////////////

    // 3-2. 왼쪽버튼 클릭시 : 왼쪽버튼 abtn변수 0번째
    abtn[0].onclick = () => {
        // 광클금지 ////////////
        if (prot) return; // 나가!
        prot = 1; // 잠금!
        setTimeout(() => (prot = 0), 800);
        ////////////////////////////

        // 1. 맨뒤요소를 잘라서 맨앞으로 이동한다!
        // 대상: slide변수 -> ul#slide
        // 사용메서드: insertBefore(넣을놈,넣을놈전놈)
        // 현재 li자식요소 수집하기!
        let cli = slide.querySelectorAll("li");
        slide.insertBefore(cli[cli.length - 1], cli[0]);

        // 2. 왼쪽 바깥에 -100% left값 주기!
        slide.style.left = "-100%";
        // 첫번째 실행후 생긴 트랜지션 없애기!
        slide.style.transition = "none";

        // 2번과 3번 코드 사이에 시차필요!!!
        // setTimeout()사용!
        // -> 시간을 0으로 해도 코드실행구역을 분리하므로
        // 코드가 별도로 실행된다!(순서를 지킴!)
        setTimeout(() => {
            // 3. left값을 0으로 트랜지션 애니메이션하기
            slide.style.left = "0";
            slide.style.transition = ".8s ease-in-out";
        }, 0);

        // 블릿변경함수 호출!
        // -> 왼쪽버튼은 첫번째 슬라이드가 주인공!
        chgIndic(0);

        // 자동넘김지우기 함수 호출!
        clearAuto();
    }; ///////////// click //////////////

    // 4. 슬라이드가 이동되므로 순서를 알 수 있는
    // 고유순번용 속성을 만들어서 넣어준다!
    // w3c에서 허용한 사용자 지정속성명은 반드시 data- 로
    // 시작해야하므로 우리는 "data-seq"라는 이름을 쓰자!
    // 대상: #slide li -> 여기에 속성을 넣는다!
    // 사용메서드 : forEach((요소,순번)=>{코드})
    // 사용메서드 : setAttribute(속성명,값)
    slide.querySelectorAll("li").forEach((ele, idx) => {
        ele.setAttribute("data-seq", idx);
    }); /////// forEach ////////////////

    // 5. 블릿변경함수
    // 버튼을 클릭할때 블릿을 해당순번의 슬라이드와 같은
    // 순번의 블릿의 li에 클래스"on"을 넣고
    // 나머지는 클래스를 제거함
    // chgIndic -> change Indicator (변경하라! 표시자를!)
    const chgIndic = (idx) => {
        // idx - 대상슬라이드 순번
        // 1. 현재 슬라이드 순번 알아오기!
        // cseq -> current sequence number(현재 순번)
        let cseq = slide
            .querySelectorAll("li")
            [idx] // 대상 li
            .getAttribute("data-seq"); // "data-seq"속성값
        // getAttribute(속성명) -> 속성값 읽어오는 JS내장함수

        console.log("순번:", cseq);

        // 2. 슬라이드 li 클래스 초기화!
        for (let x of indic) x.classList.remove("on");

        // 2. 슬라이드 순번과 동일한 블릿li 클래스 "on"넣기
        indic[cseq].classList.add("on");
    }; ////////////// chgIndic 함수 ////////////////

    /***************************************** 
        자동넘기기 기능구현
    *****************************************/
    // 인터발용변수
    let autoI;
    // 타임아웃용 변수
    let autoT;

    // 자동넘기기 /////
    // 인터발함수를 지우려면 변수에 넣고
    // clearInterval(변수) 해야함!!!

    /******************************* 
        함수명: slideAuto
        기능: 슬라이드 인터발 호출
    *******************************/
    function slideAuto() {
        autoI = setInterval(() => {
            // 오른쪽버튼 클릭시 이동코드와 동일함!!! /////////
            slide.style.left = "-100%";
            slide.style.transition = ".8s ease-in-out";
            // 0.8초후 맨앞li 잘라서 맨뒤로 이동!
            setTimeout(() => {
                // 1. 맨앞li 잘라서 맨뒤로 이동!
                slide.appendChild(slide.querySelectorAll("li")[0]);
                // 2. left값 0으로 초기화!
                slide.style.left = "0";
                /* 3. 트랜지션 없애기 */
                slide.style.transition = "none";
            }, 800);

            // 블릿변경함수 호출!
            // -> 오른쪽버튼은 두번째 슬라이드가 주인공!
            chgIndic(1);
            ///////////////////////////////////////////
        }, 2000);
    } //////// slideAuto 함수 //////////

    // 인터발함수 최초호출!
    slideAuto();

    /*********************************** 
        함수명: clearAuto
        기능: 인터발지우기,타임아웃셋팅
    ***********************************/
    function clearAuto() {
        console.log("인터발지워!!!");
        // 1. 인터발 지우기
        clearInterval(autoI);
        // 2. 타임아웃 지우기(실행쓰나미 방지!)
        clearTimeout(autoT);
        // 3. 일정시간 후 다시 인터발 호출!
        autoT = setTimeout(slideAuto, 5000);
    } /////// clearAuto함수 ////////
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
