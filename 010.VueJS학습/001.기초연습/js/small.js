import hcode from "./hcode.js";

// 뷰JS 인스턴스 생성용 함수!
const makeVue = (x) => new Vue({ el: x });

// 1. 제목에 넣을 전역컴포넌트 만들기

Vue.component("tit-comp", {
    template: hcode.tit,
}); ///// 전역 컴포넌트 1 ///////

// 뷰인스턴스 생성하기 : 반드시 컴포넌트 아래에서 함!
makeVue(".tit");
makeVue(".tit2");

// new Vue({
//     el:".tit"
// })
// new Vue({
//     el:".tit2"
// })

// 숫자증감 변수
let num = 0;

// 2. 갤러리 리스트에 넣을 전역컴포넌트 만들기
// 여기가 자식입니다!!!
Vue.component("list-comp", {
    //  v-on:click="goPapa" 로 부모이벤트 접근시작!
    template: hcode.list,
    // 부모에서 v-bind:속성명=값 으로 전달한 속성변수를
    // props:[]/{} 로 받음!
    props: ["haha", "myseq", "endlet"],
    // props:{"haha":Number}, //-> 데이터형 일치함!
    // props:{"haha":String}, //-> 데이터형 오류메시지나옴!
    // 컴포넌트 내부 변수셋팅
    data: function () {
        return {
            gsrc: `img_gallery/${this.haha}.jpg`,
            gname: `Sofia23` + this.haha + this.endlet + (this.myseq % 2 ? "😘" : "👍"),
            gprice: this.insComma((123000 * this.haha) / 2) + `원`,
            gprice2: this.insComma(((123000 * this.haha) / 2) * 0.8) + `원`,
        };
    },
    // 컴포넌트 내부 메서드셋팅
    methods: {
        // 부모이벤트호출 전달하기 : $emit() 메서드사용
        goPapa() {
            // $emit(부모가만든이벤트명)
            this.$emit("hull");
        },
        goPapa2() {
            // $emit(부모가만든이벤트명)
            this.$emit("hoy");
        },

        //정규식함수(숫자 세자리마다 콤마해주는 기능)
        insComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        condiVal(){
            return this.haha == 3 || this.haha == 5 || this.haha == 6;
        }
    },
}); ///////////// 뷰JS 컴포넌트 ////////

// 리스트 뷰 인스턴스 생성하기
// 여기가 부모입니다!!!
new Vue({
    el: ".grid",
    // 부모 뷰인스턴스 메서드구역
    methods: {
        // 자식이벤트 전달후 실행메서드!
        goMsg() {
            // alert("자식이 부모에게 이벤트전달 성공!");
        },
        ovMsg() {
            // console.log("이건오버야");
        },
    },
}); //////////// Vue 인스턴스 //////////

Vue.component("win-comp", {
    template: hcode.big,
});

new Vue({
    el: "#pbg",
    mounted: function () {
        let nowNum;
        $(".grid img").click(function () {
            $("#bgbx").fadeIn(200);
            $(".gimg img").attr("src", $(this).attr("src"));
            nowNum = $(this).parent().attr("data-num");
            
            let nowEle = $(`.grid>div[data-num=${nowNum}]`);

            $("#gtit").text(nowEle.find("h2").text());
            $("#gprice,#total").text(nowEle.find("h3").text());


        });

        $(".cbtn").click(() => {
            event.preventDefault();
            $("#bgbx").fadeOut(200);
        });

        $(".abtn").click(function () {
            event.preventDefault();
            let isB = $(this).is(".rb");
            if (isB) {
                nowNum = Number(nowNum) + 1;
                if (nowNum === 50) nowNum = 1;
            } else {
                nowNum = Number(nowNum) - 1;
                if (nowNum === 0) nowNum = 50;
            }
            $(".gimg img").attr("src", `img_gallery/${nowNum}.jpg`);

            let nowEle = $(`.grid>div[data-num=${nowNum}]`);

            $("#gtit").text(nowEle.find("h2").text());
            $("#gprice,#total").text(nowEle.find("h3").text());

            console.log(nowEle.find("h2").text());
            console.log(nowEle.find("h3").text());
        });
    },
});
