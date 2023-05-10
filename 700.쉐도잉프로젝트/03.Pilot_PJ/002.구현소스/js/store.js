const store = new Vuex.Store({
    // (1) 데이터 셋팅구역 :
    state:{
        // 서브데이터 셋업
        subData:{
            남성: {
                // 남성메뉴
                menu: ["NEW ARRIVAL", "WINDBREAKER", "BEACH STYLE", "SPORT STYLE"],
                // 배너개수
                cnt: 3,
                // 카테고리명
                cat: "men",
            },
            여성: {
                // 여성메뉴
                menu: ["NEW ARRIVAL", "SPORTY FASHION", "FREE STYLE", "COMFORTABLE STYLE"],
                // 배너개수
                cnt: 3,
                // 카테고리명
                cat: "women",
            },
            스타일: {
                // 스타일메뉴
                menu: ["NEW ARRIVAL", "GOLF LIFE", "CAMPING STYLE", "SPORT STYLE"],
                // 배너개수
                cnt: 5,
                // 카테고리명
                cat: "style",
            },
        },
        cnt:3,
        cat:"men",
        menu:["NEW ARRIVAL", "WINDBREAKER", "BEACH STYLE", "SPORT STYLE"],

    }, /////// state 구역 ///////////

    // (2) 데이터 변경 메서드 구역
    mutations:{
        // 초기데이터 셋업 메서드
        chgData(dt,pm){//dt-데이터,pm-전달값
            console.log("데이터변경!",pm);
            dt.cnt = dt.subData[pm].cnt;
            dt.cat = dt.subData[pm].cat;
            dt.menu = dt.subData[pm].menu;

        }, ////// initSet 메서드 /////
    }
}); /////////// 뷰엑스 인스턴스 ////////


// 내보내기 
export default store;