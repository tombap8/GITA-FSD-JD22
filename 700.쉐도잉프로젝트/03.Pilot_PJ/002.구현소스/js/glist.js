// 전체 리스트 페이지 JS - glist.js

// 메뉴기능함수 가져오기
import menuFn from "./mainjs/menu.js";
// 전체리스트 태그 데이터 가져오기
import comData from "./tempData/data-glist.js";

// 전체 리스트용 뷰엑스 스토어 JS 가져오기
import store from "./glist-store.js";
// 전체 리스트용 뷰 라우터 JS 가져오기
import router from "./glist-router.js";

// 1. 뷰 템블릿 만들기
//###### 상단영역 메뉴 뷰 템플릿 셋팅하기 #######
// Vue.component(내가지은요소명,{옵션})
Vue.component("top-comp", {
    template: comData.tarea,
    methods: {},
}); ////////// 상단영역 Vue component //////////

//###### 하단영역 메뉴 뷰 템플릿 셋팅하기 #######
Vue.component("foot-comp", {
    template: comData.barea,
}); ////////// 하단영역 Vue component //////////

// 2. 뷰 인스턴스 생성하기
new Vue({
    el: ".wrap",
    store, // 스토어등록!
    router, // 라우터등록!
    methods:{
        setBtn(){
            // 상품명/ 가격 등 데이터 셋업 함수
        function setVal() {
            // nowNum값에 의한 대상선정!
            const tg = $(`.grid>div[data-num=${nowNum}]`);
            // console.log(tg.find("h2").text());
            // console.log(tg.find("h3").text());

            // 1. [가격 계산을 위한 원가격셋팅]
            orgprice = tg.find("h3>span:first").attr("data-price");

            // 2. 세일적용여부
            let isSale = tg.find("h3>span:first").is(".del");

            // 3. 세일 적용일 경우 세일 가격으로 업뎃!
            if (isSale) {
                orgprice = Math.round(orgprice * 0.7);
            } ///////// if //////////////

            console.log("원가격:", orgprice);

            // 4. 상품명 큰박스에 넣기
            $("#gtit,#gcode").text(tg.find("h2").text());

            // 5. 상품가격 큰박스에 넣기
            // (1) 원가격에 표시
            $("#gprice").html(insComma(orgprice) + "원");
            // (2) 토탈가격에 표시 : 원가 * 개수
            $("#total").html(insComma(orgprice * tot) + "원");

            // 6. 세일일 경우 추가문구넣기
            if (isSale) {
                $("#gprice").prepend("<small>30% 세일가</small> ");
            } //// if ////
        } ////////// setVal함수 //////////////////

        //정규식함수(숫자 세자리마다 콤마해주는 기능)
        function insComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // 2. 닫기버튼 클릭시 큰이미지박스 숨기기
        $(".cbtn").click(function (e) {
            e.preventDefault();
            // 큰이미지박스 숨기기
            $("#bgbx").hide();
        }); /////////// click /////////

        // 3. 이전/다음버튼 클릭시 이미지변경하기
        $(".abtn").click(function (e) {
            // 0. 전체수량초기화
            initTot();

            // 1. 기본이동막기
            e.preventDefault();
            // 2. 오른쪽버튼 여부
            let isB = $(this).is(".rb");

            // 3. 분기하기
            if (isB) {
                // 오른쪽버튼
                nowNum++;
                if (nowNum === 51) nowNum = 1;
            } else {
                // 왼쪽버튼
                nowNum--;
                if (nowNum === 0) nowNum = 50;
            }

            console.log("변경된nowNum:", nowNum);

            // 4. 큰 이미지 변경하기
            $(".gimg img").attr("src", `img_gallery/${nowNum}.jpg`);

            // 5. 값 셋팅하기
            setVal();
        }); ////////// click ////////////

        // [ 수량증가/감소 버튼 클릭시 데이터 반영하기 ]
        // 이벤트 대상 : .chg_num img
        // 변경 대상 : input#sum
        const sum = $("input#sum");

        $(".chg_num img").click(function () {
            // 1. 클릭된 버튼 구분하기
            let isB = $(this).attr("alt");

            // 2. 현재값 읽어오기 : 원래문자형을 숫자형으로 변환
            let isV = Number(sum.val());

            console.log("버튼구분:", isB);
            console.log("현재값:", isV);

            // 3. 분기하기
            // (1) 증가일때
            if (isB === "증가") {
                sum.val(++isV);
                // sum.val(isV++);
                // isV++ 이면 현재값이 변경안됨!
                // 왜? 1증가전에 반영하기 때문!
            } ///////// if ////////

            // (2) 감소일때 : 한계값 1
            else {
                isV = --isV;
                if (isV === 0) isV = 1;
                sum.val(isV);
            } /////// else ///////

            // 4. 가격표시하기
            // 수량을 전역변수에 할당하여 setVal()에 반영함!
            tot = isV;

            setVal();
        }); ///////////// click //////////////

        /********************************** 
            수량직접 입력 기능구현
            1. 숫자만 입력(0이상)
            2. 입력즉시 합계출력
            3. 빈값금지
        **********************************/
        // 대상: #sum
        // 이벤트 : keyup (입력즉시반응)
        $("#sum")
            .keyup(function () {
                // 0. 요소자신
                let ele = $(this);
                // 1. 입력된 값 : input요소는 val() 메서드로!
                let txt = ele.val();
                // 2. 숫자가 아닌경우 : isNaN() - 숫자가 아니면 treu
                // - 조건: 숫자가 아니거나 1미만 이거나 빈값이면!
                // -> 소수점방지 : txt.indexOf(".")!==-1
                // 문자열.indexOf(".") -> 점문자가 없으면 -1임

                // 다지우고 숫자를 넣을 경우 다지운상태 허용하기!
                if (txt === "") return;

                if (isNaN(txt) || txt < 1 || txt === "" || txt.indexOf(".") !== -1) {
                    initTot(); // 초기화!
                } /// if ///
                // 3. 숫자인경우 tot업뎃 + setVal()호출!
                else {
                    tot = txt;
                    if (txt >= 100) {
                        alert("100개이상인 경우 \n쇼핑몰에 직접전화주세요~!\nTel:02-333-3333");
                    }
                    // 숫자앞에 0을 넣으면 없애기!
                    // 문자형숫자를 숫자형으로 변환하면 된다!
                    ele.val(Number(txt));
                } /// else ///

                // 4. 계산수행
                setVal();

                console.log("직접입력:", txt);
            })
            .blur(function () {
                // 블러시 만약 비어있으면 1로 초기화!
                if ($(this).val().trim() === "") {
                    initTot();
                    setVal();
                }
            }); ///// blur로 빈값허용에 대한처리 ////
        }, /////////// setBtn ///////////////
    },
    mounted() {
        // 첫번째 라우터 강제실행!
        this.$router.push("/glist");
        // push(실행할 뷰라우터경로)
        // $router - 전체 라우터객체
        // 비교)  $route - 개별경로정보객체

        // 최초 체크박스체크 메서드 실행해야 리스트나옴!
        store.commit("resCheck");

        // 메뉴기능실행
        menuFn();

        // 로고이동기능
        $("#logo").click(() => (location.href = "index.html"));

        
    }, ////////// mounted구역 /////////
});
