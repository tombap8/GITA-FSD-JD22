import jsnData from "./goods.json" assert{ type: "json"} ;

const store = new Vuex.Store({
    // (1) 데이터 셋팅구역 :
    state:{
        // 도시데이터 셋업
        items:[],
        // 이미지정보 셋업변수
        imgsrc : "",
        // 도시설명정보 셋업변수
        desc : "",

    }, /////// state 구역 ///////////

    // (2) 데이터 변경 메서드 구역
    mutations:{
        // 초기데이터 셋업 메서드
        initSet(state,param){
            console.log("데이터변경! 초기화!");
            // state.imgsrc = param;
            // 파라미터가 객체일 경우(데이터다수일때!)

            // 이미지데이터 셋업
            state.imgsrc = param.url;
            // 설명데이터 셋업
            state.desc = param.txt;

        }, ////// initSet 메서드 /////

        setData(st,pm){
            st.items = pm;
            console.log("전달:",pm);
        }
    },
    actions:{
        initData({commit}){
            const res = jsnData;
            // const data = res.data && res.data.map(x=>({
            const data = res.data?.map(x=>({
                idx:x.idx,
                gname:x.gname,
                category:x.category,
                gprice:x.gprice
            }));

            commit('setData',res);
            // console.log("원본:",res);
        }
    }
}); /////////// 뷰엑스 인스턴스 ////////


// 내보내기 
export default store;