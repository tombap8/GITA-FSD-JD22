// 옷소매 갤러리 JS - main.js

//////////////// 로드구역 ////////////////////
window.addEventListener("DOMContentLoaded", () => {
    // 기능구현내용:
    // 버튼클릭시 갤러리 div박스를 순서이동하기
    // 오른쪽버튼클릭시 -> 맨앞요소 맨뒤로 이동
    // ->>> appendChild(요소)
    // 왼쪽버튼클릭시 -> 맨뒤요소 맨앞으로 이동
    // ->>> insertBefore(넣을놈,넣을놈전놈)

    // 변경 대상: .gbx
    const gbx = document.querySelector(".gbx");

    // 이벤트 대상: .abtn
    const abtn = document.querySelectorAll(".abtn");
    // 0번째는 왼쪽버튼, 1번째는 오른쪽버튼
    abtn[0].onclick = () => {
        // 인터발지움 함수 호출!
        clearAuto();
        // 슬라이드 이동함수 호출!
        goSlide(0);
    };
    abtn[1].onclick = () => {
        // 인터발지움 함수 호출!
        clearAuto();
        // 슬라이드 이동함수 호출!
        goSlide(1);
    };

    // 광클금지 상태변수
    let prot = 0; // 0-허용,1-불허용

    /************************************ 
        함수명: goSlide
        기능: 내부 박스요소 앞뒤로 이동
    ************************************/
    function goSlide(dir) {
        // dir - 0 왼쪽,1 오른쪽
        // 0. 광클금지 /////////
        if (prot) return;
        // prot===1이면 돌아가!
        prot = 1; //잠금!
        setTimeout(() => {
            prot = 0;
        }, 400);
        // 0.4초후 잠금 해제
        //////////////////////

        // 1. 전달값 및 호출확인
        console.log("나야나!", dir);

        // 2. 이동할 직계자식 div 담기
        // 주의: 이동할때마다 구해와야 최신순서를 담는다!
        let tg = gbx.querySelectorAll("div");
        // console.log(tg);

        // 3. 분기하기
        // 3-1. 오른쪽버튼일때: dir===1 (true)
        if (dir) {
            // 맨앞요소 맨뒤로 이동
            gbx.appendChild(tg[0]);
        } //////////// if ///////////
        // 3-2. 왼쪽버튼일때: dir===0 (false)
        else {
            // 맨뒤요소 맨앞으로 이동
            gbx.insertBefore(tg[tg.length - 1], tg[0]);
            // 맨뒤요소는 [개수-1]
        } /////////// else /////////
    } //////////// goSlide 함수 //////////

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
            goSlide(1);
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
}); ///////////// 로드구역 ///////////////////
