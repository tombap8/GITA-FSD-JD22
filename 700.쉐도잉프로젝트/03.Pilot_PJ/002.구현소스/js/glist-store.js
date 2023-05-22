// 상품 리스트 페이지 뷰엑스 스토어 셋팅 JS  - glist-store.js

// 신상정보
import gdata from "./gdsData/item-list.js";

const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        gdata: gdata,
        chkarr: [true, true, true],
        // 공통처리 배너개수 변수
        selnm: ["", "", ""],
        pnum: 0,
        mnum: 0,
    },
    // state 데이터 변경 메서드구역!
    mutations: {
        resCheck(dt) {
            console.log(dt.chkarr);
            dt.chkarr.forEach((v, i) => {
                if (v) {
                    dt.selnm[i] = i == 0 ? "men" : i == 1 ? "women" : "style";
                } else {
                    dt.selnm[i] = "";
                }
            });
            console.log(dt.selnm);
        },
        sorting(dt) {
            function comp(val1, val2) {
                return val1.id < val2.id;
            }
            vm.items.sort(comp);

            dt.gdata = gdata.sort();
            console.log(dt.gdata);
        },

        // 데이터 변경 셋업 메서드
        updatePaging(dt, pm) {
            dt.pnum = pm;
        }, ///////// chgData메서드 ///////
        // 데이터 변경 셋업 메서드
        updateMore(dt, pm) {
            dt.mnum = pm;
            $("#more").hide();
        }, ///////// chgData메서드 ///////
        setClick(dt,pm){
            
            // alert(333);
            $(".gdesc").append('<img id="mycart" src="./images/mycart.gif" alt="">')
            $("#mycart").css({
                position:"fixed",
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)",
                cursor:"pointer",
                zIndex:"999",
            })
            .delay(4000)
            .animate({                
                top:"5%",
                left:"80%",
                width: "50px",
            },1000)
        }
    },
});

// 내보내기
export default store;
