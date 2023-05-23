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
            // console.log(dt.chkarr);
            dt.chkarr.forEach((v, i) => {
                if (v) {
                    dt.selnm[i] = i == 0 ? "men" : i == 1 ? "women" : "style";
                } else {
                    dt.selnm[i] = "";
                }
            });
            // console.log(dt.selnm);
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
        setClick(dt, pm) {
            console.log(dt.gdata[pm]);
            // alert(333);

            this.commit("setLS", dt.gdata[pm]);
        }, /////////// setClick ///////////
        setLS(dt, pm) {
            console.log("전달값:", pm.idx);
            console.log("cart:", localStorage.getItem("cart"));
            if (localStorage.getItem("cart") === null) localStorage.setItem("cart", "[]");
            let org = localStorage.getItem("cart");
            org = JSON.parse(org);
            console.log("변환객체:", org);

            let save = true;

            org.forEach((val) => {
                if (val.idx === pm.idx) {
                    alert("이미 선택하신 상품입니다!^^");
                    save = false;
                }
            });

            if (save) {
                org.push(pm);

                $("#mycart").remove();
                $("body").append(`
                <img id="mycart" src="./images/mycart.gif" 
                title="${org.length}개의 상품이 카트에 있습니다">`);

                const list = org.map((v,i)=>`
                    <tr>
                        <td>${i+1}</td>
                        <td>${v.ginfo[1]}</td>
                        <td>${v.ginfo[2]}</td>
                        <td>${v.ginfo[3]}</td>
                        <td>${1}</td>
                        <td>${v.ginfo[3]}</td>
                    </tr>
                `);
    
                $("#mycart")
                    .css({
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        cursor: "pointer",
                        zIndex: "999999",
                    })
                    .delay(4000)
                    .animate(
                        {
                            top: "5%",
                            left: "80%",
                            width: "50px",
                        },
                        1000
                    )
                    .click(function(){
                        $("body").append(`<section id="cartlist"></section>`);
                        $("#cartlist").html(`
                            <a href="#" class="cbtn cbtn2">×</a>
                            <table>
                                <caption>
                                    <h1 style="font-size:40px">카트 리스트</h1>
                                </caption>
                                <tr>
                                    <th>번호</th>
                                    <th>상품명</th>
                                    <th>상품코드</th>
                                    <th>단가</th>
                                    <th>수량</th>
                                    <th>합계</th>
                                </tr>
                                ${list}
                            </table>
                        `)
                        .css({
                            position:"fixed",
                            top:"0",
                            right:"-60vw",
                            width:"60vw",
                            height:"100vh",
                            backgroundColor:"rgba(255,255,255,.7)",
                            zIndex:"9999999",
                        })
                        .animate({
                            right:"0"
                        },600,"easeInOutQuint")
                        .find("table")
                        .css({
                            width:"90%",
                            margin:"50px auto",
                            fontSize:"14px",
                        });

                        $(".cbtn2").click(()=>{
                            $("#cartlist").animate({
                                right:"-60vw"
                            },600,"easeInOutQuint")
                        })
                    })

                
            }

            console.log("추가후:", org);

            // 객체 변환후 로컬스토리지에 입력
            localStorage.setItem("cart", JSON.stringify(org));
            console.log(localStorage.getItem("cart"));

            //  localStorage.clear()
        }, ////////// setLS /////////////
    },
});

// 내보내기
export default store;
