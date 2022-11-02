// 쇼핑몰 배너 JS - 03.페이드효과 //

/******************************************** 
 * 
    [ 페이드 효과 슬라이드 기능정의 ]
    -> 슬라이드 순번에 대한 전역변수를 사용한다!

    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!

    2. 왼쪽버튼은 이전순번이 나오며 위와 동일

    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.

    4. 블릿은 현재 슬라이드와 일치된 순번표시

********************************************/

$(() => {
    ///////////// jQB ///////////////////////

    // 1. 호출확인
    console.log("로딩완료!");

    // 2. 변경대상: 
    // 2-1. 슬라이드 li : #slide li
    const slide = $("#slide li");
    // 2-2. 블릿 li : .indic li
    const indic = $(".indic li");

    // 3. 순번변수: 슬라이드순번 + 블릿순번
    let sno = 0; // 첫순번은 0번

    // 4. 이벤트 대상: .abtn (버튼 2개)
    $(".abtn").click(function () {
        // 1. 오른쪽버튼 여부확인
        // is(선택자) -> 선택자인지 여부(true/false)
        let isR = $(this).is(".ab2");
        console.log("오른쪽버튼이니? ", isR);

        // 2. 분기하기
        // 2-1. 오른쪽일때
        if (isR) {
            // 순번증가
            sno++;
            // 한계값 체크(처음으로 돌림!)
            if (sno === slide.length) sno = 0;
        } ///////// if /////////
        // 2-2. 왼쪽일때
        else {
            // 순번감소
            sno--;
            // 한계값 체크(마지막으로 돌림!)
            if (sno === -1) sno = slide.length-1;
        } ///////// else ///////////

        // 3. 슬라이드 해당순번(sno) 클래스(on)넣기
        // + 나머지 다른형제li는 on제거
        slide.eq(sno).addClass("on").siblings().removeClass("on");

        // 4. 블릿 해당순번(sno) 클래스(on)넣기
        // + 나머지 다른형제li는 on제거
        indic.eq(sno).addClass("on").siblings().removeClass("on");
    }); ////////// click //////////////
}); //////////////// jQB ///////////////////////
