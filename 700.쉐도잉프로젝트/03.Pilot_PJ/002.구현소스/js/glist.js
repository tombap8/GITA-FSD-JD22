// 카테고리 서브페이지 JS - sub.js

// 메뉴기능함수 가져오기
import menuFn from "./mainjs/menu.js";
// 리스트 데이터 가져오기
import comData from "./tempData/data-glist.js";

// 뷰엑스 스토어 JS 가져오기
// 중요! 반드시 메인JS파일 한군데서 불러와 써야 상태관리됨!
// -> 이 JS파일에 Vue 인스턴스 생성코드가 같이 있어야한다!
import store from "./glist-store.js";
import router from "./glist-router.js";


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

//###### 메인영역 리스트셋팅하기 #######
Vue.component("list-comp", {
    template: comData.glist,
}); ////////// 메인영역 Vue component //////////

//###### 상단영역 뷰 인스턴스 생성하기 ##########
// new Vue({옵션})
const myvue = new Vue({
    el: ".wrap",
    store, // 뷰엑스 스토어 사용하려면 등록필수!
    router, // 뷰 라이터 등록!
    data: {
        gdata: store.state.gdata
    },
    methods:{
        // comp(val1, val2){
        //     return val1.idx < val2.idx;
        // }
    },
    // mounted 실행구역: DOM연결후
    mounted: function () {
       
        // 첫리스트 페이지 보이기
        this.$router.push('/glist');
        // 체크박스 체크메서드 실행
        store.commit('resCheck');

        
        $(".flist a").click(function (e) {
            e.preventDefault();

            $("#bgbx").slideDown(400);

            let cls = $(this).parent().attr("class");
            let ginfo = $(this).next(".ibox").html().split("<br>");
            console.log(cls, ginfo);
            store.state.cls = cls;
            store.state.gname = ginfo[0];
            store.state.gcode = ginfo[1];
            store.state.gprice = ginfo[2];
        });
        
        menuFn();

        $("#logo").click(() => (location.href = "index.html"));

        // store.state.gdata.sort(this.comp);
    },
    // created 실행구역 : DOM연결전
    created: function () {
        // DOM연결전 데이터 가공작업
        console.log("created구역");
    },
}); //////// 전체영역 뷰 인스턴스 ////////

Vue.prototype.$myFn = function(aa){
    console.log(aa);
}


