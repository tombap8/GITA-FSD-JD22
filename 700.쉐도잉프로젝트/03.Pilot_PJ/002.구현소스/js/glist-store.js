// 상품 리스트 페이지 뷰엑스 스토어 셋팅 JS  - glist-store.js

// 신상정보
import gdata from "./gdsData/item-list.js";

const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        gdata:gdata,
        chkarr : [],
        // 공통처리 배너개수 변수
        selnm:["","",""],
    },
    // state 데이터 변경 메서드구역!
    mutations: {
        resCheck(dt){
            console.log(dt.chkarr);
            dt.chkarr.forEach((v,i)=>{
                if(v){ 
                    dt.selnm[i]=(i==0?"men":i==1?"women":"style");
                }
                else{
                    dt.selnm[i]="";
                }
            });
            console.log(dt.selnm);
    },
    sorting(dt){
        function comp(val1, val2){
            return val1.id < val2.id;
        }
        vm.items.sort(comp);

          dt.gdata = gdata.sort();
          console.log(dt.gdata);
    },
    
        // 데이터 변경 셋업 메서드
        chgData(dt,pm){ // dt-state데이터, pm-전달값
            pm = pm.replace("#/","");
            console.log("데이터변경:",pm);
            // pm에 객체데이터 속성명이 전달됨(남성/여성/스타일)
            // 1. 해당 카테고리 개수 업데이트
            dt.cnt = dt.subData[pm].cnt;
            // 2. 해당 카테고리 이름 업데이트
            dt.cat = dt.subData[pm].cat;
            // 3. 해당 카테고리 메뉴 업데이트
            dt.menu = dt.subData[pm].menu;
            // 4. 해당 객체속성명 업데이트
            dt.name = pm;
        }, ///////// chgData메서드 ///////
    },
});

// 내보내기
export default store;
