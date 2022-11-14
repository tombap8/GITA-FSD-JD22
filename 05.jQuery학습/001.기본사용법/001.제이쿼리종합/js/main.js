// 미니언즈 좀비 탈출 애니 구현 JS - main.js
$(() => {
    /////////// jQB ///////////////////

    // 로딩확인
    console.log("로딩완료!");

    /*********************************** 
        [ 요구사항정리 ]
        1. 버튼을 클릭하여 미니언즈가
        순서대로 특정위치로 이동하며
        메시지를 보여준다
        2. 각 위치별 좀비를 등장시킨다
        3. 맨윗층에서 탈출할때 헬기를 사용한다

        [ 변경대상 ]
        1. 주인공 미니언즈
        2. 좀비 미니언즈들
        3. 주사기
        4. 헬기

        [ 이벤트와 이벤트대상  ]
        1. 이벤트 : 클릭이벤트
        2. 이벤트대상 : 버튼들
        3. 기능구분 : 버튼글자(지시사항)

    ***********************************/

    // 0. 주인공들 변수에 할당!
    // (1) 미니언즈
    let mi = $(".mi");

    // (2) 건물 li
    let bd = $(".building li");

    // (3) 버튼들
    let btns = $(".btns button");

    // (4) 메시지박스
    let msg = $(".msg");

    // (5) 좀비,주사기 요소 변수처리
    let mz1 = `<img src="images/mz1.png" alt="좀비1" class="mz">`;
    let mz2 = `<img src="images/mz2.png" alt="좀비2" class="mz">`;
    let zom = `<img src="images/zom.png" alt="좀비들" class="mz">`;
    let inj = `<img src="images/inj.png" alt="주사기" class="inj">`;

    // console.log(mi,bd,btns,msg);

    // 1. 건물 각 방에 번호넣기
    // each((순서,요소)=>{}) -> 요소의 개수만큼 순서대로 돌기
    // append(요소) -> 요소내부에 자식요소 추가(이동)

    bd.each((idx, ele) => {
        // text() 텍스트 넣기
        $(ele).text(idx);
        // 좀비넣기, 주사기 넣기
        switch (idx) {
            case 9:
                $(ele).append(mz1);
                break;
            case 7:
                $(ele).append(mz2);
                break;
            case 1:
                $(ele).append(zom);
                break;
            case 2:
                $(ele).append(inj);
                break;
        } ///// siwtch case ////
    }); //////////// each ////////////////

    // 좀비는 모두 숨기기
    $(".mz").hide();
    // 시간없는 hide()는 display:none처리함!

    // 2. 버튼 셋팅하기
    // 모든 버튼은 숨기고 첫번재 버튼만 보여!
    // 버튼.숨겨().첫번째().보여()
    // btns.hide().first().show();

    //테스트시 중간버튼부터
    btns.hide().eq(4).show();

    // 3. 공통함수 : actMini() ///////////////////////
    const actMini = (ele, seq, fn) => {
        // 전달값 (ele-버튼요소,seq-방순번,fn-콜백함수)
        // 1. 클릭된 버튼 사라지기
        $(ele).slideUp(300);
        // slideUp(시간,이징,함수)
        // 높이값이 0되면서 애니, 0된후 display:none처리함

        // 2. 메시지 없애기 : .msg -> msg변수
        msg.fadeOut(300);
        // fadeOut(시간,이징,함수)
        // 서서히 사라짐,사라진후 display:none처리됨

        // 3. 이동하기
        // 위치: li 8번방 -> bd변수에 모든 li있음
        let pos = [];
        // 대상: li의 몇번째(seq)
        let room = bd.eq(seq);
        // top 위치값
        pos[0] = room.offset().top;
        // left 위치값 : 중앙위치보정(+li절반-미니언즈절반)
        pos[1] = room.offset().left + room.width() / 2 - mi.width() / 2;
        // console.log(pos);

        // 미니언즈 위치이동하기 애니메이션
        // 대상: .mi -> mi변수
        mi.animate(
            {
                top: pos[0] + "px",
                left: pos[1] + "px",
            },
            800,
            "easeOutElastic",
            // 메시지호출:콜백함수
            fn
        );
        // animate({CSS설정},시간,이징,함수)
        // 모든 제이쿼리 애니메이션 메서드에는
        // 끝난후 실행함수가 있다!(콜백함수)
    }; /////////// actMini함수 //////////

    // 4. 들어가기 버튼 클릭시 ///////////////
    btns.first()
        .click(function () {
            // 이동후 함수 /////////////////
            let fn = () => {
                msg.text("와~! 아늑하다! 옆방으로 가보자!") // 텍스트 변경
                    .fadeIn(300); // 나타나기
                // 다음버튼 보이기
                $(this).next().delay(500).slideDown(300);
                // slideDown(시간,이징,함수)
                // - 자동으로 원래 높이값복원 애니
                // - 최초상태는 항상 display:none이다!
            }; //////// fn함수 /////////////

            actMini(this, 8, fn);
        })
        // 5. 옆방으로! 버튼 클릭시 ///////////////
        .next()
        .click(function () {
            // 일반익명함수로 해야 this가 버튼임!
            // ()=> { 화살표함수는 내부의 this가 바깥으로 나가 window가 잡힌다!
            // 이동후 함수 /////////////////
            let fn = () => {
                // 좀비 나타나기(2초후)
                bd.eq(9)
                    .find(".mz")
                    .delay(2000)
                    .fadeIn(
                        400,
                        // function(){ // 내부의 this의미가 달라짐!
                        () => {
                            // 화살표함수는 바깥싸고 있는 function 익명함수의
                            // 주인인 버튼이 this임!

                            // 좀비가 나타난 후 메시지 보이기
                            msg.html("악!;;;; 좀비!<br>어서피하자!") // 텍스트 변경
                                .css({ left: "-87%" }) // 위치변경
                                .fadeIn(300); // 나타나기

                            // 다음버튼 보이기
                            $(this).next().delay(500).slideDown(300);

                            // this는 누구인가? 확인!
                            console.log(this);
                            // this는 이벤트걸린 버튼임!(화살표함수라 나감!)
                        }
                    ); //////// fadeIn ///////
            }; //////// fn함수 /////////////

            actMini(this, 9, fn);
        })
        // 6. 윗층으로 도망가! 버튼 클릭시 ///////////////
        .next()
        .click(function () {
            // 이동후 함수
            let fn = () => {
                // 메시지 보이기
                msg.html(`여긴없겠지?`).fadeIn(200);

                // 좀비보이기
                bd.eq(7)
                    .find(".mz")
                    .delay(1000)
                    .fadeIn(400, () => {
                        // 메시지 변경하기
                        msg.html(`악, 여기도!!!`);
                        // 다음버튼 보이기
                        $(this).next().slideDown(300);
                    });
            };

            // 액션함수호출
            actMini(this, 7, fn);
        })
        // 7. 다시옆방으로! 버튼 클릭시 ///////////////
        .next()
        .click(function () {
            // 이동후 함수
            let fn = () => {
                // 첫번째 메시지
                msg.html(`여긴 없겠지?`)
                    .fadeIn(200)
                    .delay(1000) // 1초지연(지연시간은 애니메이션메서드 앞)
                    .fadeIn(200, () => {
                        // 두번째 메시지
                        msg.html(`그래도 무서우니
                    <br>윗층으로 가자!`);
                        // 다음버튼 보이기
                        $(this).next().slideDown(300);
                    }); /////// fadeIn ////////
            };

            // 액션함수호출
            actMini(this, 6, fn);
        })
        // 8. 무서우니 윗층으로! 버튼 클릭시 ///////////////
        .next()
        .click(function () {
            // 이동후 함수
            let fn = () => {
                // 무.서.워... 메시지
                msg.text("무")
                    .fadeIn(200)
                    .delay(500)
                    .fadeIn(200, () => msg.text("무."))
                    .delay(500)
                    .fadeIn(200, () => msg.text("무.서"))
                    .delay(500)
                    .fadeIn(200, () => msg.text("무.서."))
                    .delay(500)
                    .fadeIn(200, () => msg.text("무.서.워"))
                    .delay(500)
                    .fadeIn(200, () => msg.text("무.서.워."))
                    .delay(500)
                    .fadeIn(200, () => msg.text("무.서.워.."))
                    .delay(500)
                    .fadeIn(200, () => msg.text("무.서.워..."))
                    .delay(500)
                    .fadeIn(200, () => {
                        // 7번방 좀비가 올라와서
                        // 달겨든다!
                        bd.eq(7)
                            .find(".mz")
                            .animate(
                                {
                                    // 윗층으로 올라옴
                                    bottom: bd.eq(7).height() + "px",
                                    // li 높이값 만큼 bottom을 올려준다!
                                },
                                500,
                                "easeOutElastic"
                            )
                            .delay(500) // 기다림
                            .animate(
                                {
                                    // 달겨들기
                                    right: bd.eq(7).width() * 1.2 + "px",
                                    // li 가로크기 만큼 right값 변경(보정*1.2)
                                },
                                1000,
                                "easeOutBounce",
                                () => {
                                    // 물린후 대사
                                    msg.css({ left: "-110%" })
                                        .html(`아~악! 물렸다!<br>
                                    어서 치료주사방으로!`);

                                    // 미니언즈 좀비 이미지 변경(1초후)
                                    setTimeout(() => {
                                        mi.find("img")
                                            .attr("src", "images/mz1.png")
                                            .css({ filter: "grayscale(100%)" });
                                        // 흑백변경: 필터 그레이스케일

                                        // 다음버튼 보이기
                                        $(this).next().slideDown(300);
                                    }, 1000); ///// setTimout ///////
                                }
                            ); ////// animate /////
                    });
            };

            // 액션함수호출
            actMini(this, 4, fn);
        })
        // 9. 치료주사방으로! 버튼 클릭시 ///////////////
        .next()
        .click(function () {
            // 이동후 함수
            let fn = () => {
                // 주사기돌기(animate는 트랜스폼 적용안됨)
                $(".inj").css({
                    transform: "rotate(-150deg)", // 반시계방향회전
                    transition: ".5s .5s", // 0.5초후 0.5초간 애니
                    zIndex: "9999", // 미니언즈 보다 위
                }); //////// css ///////

                // 미니언즈로 다시 태어나다!(1초후)
                setTimeout(() => {
                    // 이미지변경
                    mi.find("img")
                        .attr("src", "images/m2.png")
                        .css({ filter: "grayscale(0)" }); //다시컬러!

                    // 대사
                    msg.html("이제 조그만 더<br>가면 탈출이닷!")
                        .css({ left: "-84%" })
                        .fadeIn(200);

                    // 주사기 없애기
                    $(".inj").hide();

                    // 다음버튼 보이기
                    $(this).next().slideDown(300);
                }, 1000);
            };

            // 액션함수호출
            actMini(this, 2, fn);
        })
        // 10. 3번방으로! 버튼 클릭시 ///////////////
        .next()
        .click(function () {
            // 이동후 함수
            let fn = () => {
                // 메시지 보이기
                msg.html("어서윗층으로 가자!").fadeIn(200);

                // 다음버튼 보이기
                $(this).next().slideDown(300);
            };

            // 액션함수호출
            actMini(this, 3, fn);
        })
        // 11. 1번방으로! 버튼 클릭시 ///////////////
        .next()
        .click(function () {
            // 이동후 함수
            let fn = () => {
                // 메시지 보이기
                msg.html("이제 곧 탈출이닷!").fadeIn(200);

                // 다음버튼 보이기
                $(this).next().slideDown(300);
            };

            // 액션함수호출
            actMini(this, 1, fn);
        })
        // 12. 헬기를 호출! 버튼 클릭시 ///////////////
        .next()
        .click(function () {
            // 이동후 함수
            let fn = () => {
                // 메시지 보이기
                msg.html("도와줘요!").fadeIn(200);

                // 1번방 단체좀비들 달겨듬!
                bd.eq(1)
                    .find(".mz")
                    .fadeIn(300)
                    .animate(
                        {
                            right: bd.eq(1).width() + "px",
                        },
                        3000,
                        "easeInExpo"
                    );

                // 헬기등장
                $(".heli")
                    .animate(
                        {
                            left: "20%",
                        },
                        4000,
                        "easeOutBack",
                        function () {
                            // 여기서 this는 .heli
                            // 헬기도착 후 탑승이미지 변경
                            $(this).attr("src", "images/heli2.png");
                            // 원본 미니언즈는 사라짐
                            mi.hide();
                        }
                    )
                    .delay(500) // 0.5초 쉬었다가
                    .animate(
                        {
                            // 다시 오른쪽 끝으로 이동
                            left: "70%",
                        },
                        4000,
                        "easeInOutCirc",
                        function () {
                            // 끝쪽에서 조정사 좀비로!
                            $(this).attr("src", "images/heli3.png");
                        }
                    )
                    .delay(300)
                    .animate(
                        {
                            // 아주 천천히 오른쪽 바깥으로 나감!
                            left: "100%",
                        },
                        10000, // 10초간이동
                        "linear", // 등속도
                        () => {
                            // 최종마무리구역

                            // 간판 떨어뜨리기
                            // 1단계 : 중간까지 떨어짐
                            // -> 간판에 class "on"주기
                            let tit = $(".tit");
                            tit.addClass("on");
                            setTimeout(
                                // -> 간판에 class "on2"주기
                                () => tit.addClass("on2"),
                                3000
                            );

                            // 빌딩 무너뜨리기
                            // 간판 떨어진 후 실행(6초)
                            setTimeout(() => {
                                bd.parent().addClass("on");
                                // parent() 부모요소인 .building
                            }, 6000);
                        }
                    ); ///////// animate /////////////
            };

            // 액션함수호출
            actMini(this, 0, fn);
        }); ///////// "헬기를 호출!" 버튼 클릭 마무리 ///////

    /// 간판에 마우스 오버시/아웃시 색상변경하기
    // hover(함수1,함수1)
    // - 함수1은 오버시, 함수2는 아웃시 실행!
    $(".tit").hover(
        function () {
            // over
            $(this).css({
                backgroundColor: "blue",
                color: "cyan",
            }); //// css ///
        },
        function () {
            // out
            $(this).css({
                backgroundColor: "pink",
                color: "yellow",
            }); //// css ///
        }
    ); ///////// hover ////////////
}); /////////////// jQB ////////////////////
