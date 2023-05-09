const store = new Vuex.Store({
    // (1) 데이터 셋팅구역 :
    state:{
        // 서브데이터 셋업
        subData:{
            "남성":{
                cnt:3,
                cat:"men"
            },
            "여성":{
                cnt:3,
                cat:"women"
            },
            "스타일":{
                cnt:5,
                cat:"style"
            },
        },
        cnt:3,
        cat:"men"

    }, /////// state 구역 ///////////

    // (2) 데이터 변경 메서드 구역
    mutations:{
        // 초기데이터 셋업 메서드
        chgData(dt,pm){//dt-데이터,pm-전달값
            console.log("데이터변경!",pm);
            dt.cnt = dt.subData[pm].cnt;
            dt.cat = dt.subData[pm].cat;

        }, ////// initSet 메서드 /////
    }
}); /////////// 뷰엑스 인스턴스 ////////


// 내보내기 
export default store;