
const Glist = {
    template: `
    <section>
        <div id="optbx">
            <label for="men">남성</label>
            <input type="checkbox" id="men" v-model="$store.state.chkarr[0]" @change="$store.commit('resCheck')">
            <label for="women">여성</label>
            <input type="checkbox" id="women" v-model="$store.state.chkarr[1]" @change="$store.commit('resCheck')">
            <label for="style">스타일</label>
            <input type="checkbox" id="style" v-model="$store.state.chkarr[2]" @change="$store.commit('resCheck')">
        </div>
        <div class="grid">
            <div 
            v-for="(v,i) in $store.state.gdata" :key="v.idx"
            v-if="v.cat==$store.state.selnm[0]||
            v.cat==$store.state.selnm[1]||
            v.cat==$store.state.selnm[2]">    
               [{{v.idx}}] 

               <router-link v-bind:to="{ name: 'det', params:{ id:v.idx} }">
               
               <img 
                v-bind:src="
                    './images/goods/'+
                    v.cat+
                    '/'+
                    v.ginfo[0]+
                    '.png'
                " alt="dress">
                <aside>
                    <h2>{{v.ginfo[1]}}</h2>
                    <h3>{{v.ginfo[3]}}</h3>
                </aside>
                </router-link>


            </div>
        </div>
    </section>
    `,
};
const Paging = {
    template: `
    <section>
        <div class="grid">
        <div 
            v-for="(v,i) in $store.state.gdata" 
            v-if="v.idx>=1+$store.state.pnum && v.idx<=10+$store.state.pnum">    
            [{{v.idx}}] <img 
            v-bind:src="
            './images/goods/'+
            v.cat+
            '/'+
            v.ginfo[0]+
            '.png'
            " alt="dress">
        <aside>
        <h2>{{v.ginfo[1]}}</h2>
        <h3>{{v.ginfo[3]}}</h3>
        </aside>
        </div>
        </div>

        <div id="paging">
            <a href="#" @click.prevent="$store.commit('updatePaging',0)">
            1
            </a>
            | 
            <a href="#" @click.prevent="$store.commit('updatePaging',10)">
            2
            </a>
            | 
            <a href="#" @click.prevent="$store.commit('updatePaging',20)">
            3
            </a>
        </div>
    </section>
    `,
};
const More = {
    template: `
    <section>
        <div class="grid">
        <div 
            v-for="(v,i) in $store.state.gdata" 
            v-if="v.idx>=1 && v.idx<=10+$store.state.mnum">    
            [{{v.idx}}] <img 
            v-bind:src="
            './images/goods/'+
            v.cat+
            '/'+
            v.ginfo[0]+
            '.png'
            " alt="dress">
        <aside>
        <h2>{{v.ginfo[1]}}</h2>
        <h3>{{v.ginfo[3]}}</h3>
        </aside>
        </div>
        </div>

        <div id="more">
            <button class="more" @click.prevent="$store.commit('updateMore',20)">MORE</button>
        </div>
    </section>
    `,
};
const Detail = {
    template: `
            
    <!-- 큰이미지 배경박스 -->
    <div id="bgbx">
        <!-- 닫기버튼 -->
        <a href="#" class="cbtn" @click="$router.push('/glist')">
            <span class="ir">닫기버튼</span>
        </a>
        
        <!-- 큰이미지 박스 -->
        <div id="imbx">
            <div class="inx">
                <!-- 큰 이미지 -->
                <section class="gimg">
                    <img class="magnify" :src="
                    'images/goods/'+$store.state.gdata[$route.params.id-1].cat+
                    '/'+$store.state.gdata[$route.params.id-1].ginfo[0]+'.png'
                    " alt="큰 이미지">
                    <div class="small">
                        <a href="#">
                        <img v-for="v in 6" :src="
                        'images/goods/'+$store.state.gdata[$route.params.id-1].cat+
                        '/m'+v+'.png'
                        " alt="작은 이미지"></a>
                    </div>
                </section>
                <!-- 이미지 설명 -->
                <section class="gdesc scbar">
                    
                    <!--상품 정보 영역-->
                    <h1>HOME &gt; WOMEN &gt; DRESS</h1>
                    <div>
                        <ol>
                            <li>
                                <img src="images/dx_ico_new-28143800.gif" alt="new버튼">
                            </li>
                            <li id="gtit">상품명 : {{$store.state.gdata[$route.params.id-1].ginfo[1]}}</li>
                            <li>
                                <img src="images/icon_type02_social01.gif" alt="페이스북"><img
                                    src="images/icon_type02_social02.gif" alt="트위터"><img src="images/icon_mail02.gif"
                                    alt="이메일"><img src="images/btn_source_copy.gif" alt="URL복사">
                            </li>
                            <li>
                                <span>판매가</span>
                                <span id="gprice">{{$store.state.gdata[$route.params.id-1].ginfo[3]}}</span>
                            </li>
                            <li>
                                <span>적립금</span>
                                <span><img src="images/icon_my_m02.gif" alt="적립금">4,950(5%적립)</span>
                            </li>
                            <li>
                                <span>무이자할부</span>
                                <span>부분 무이자 할부 혜택 <img src="images/view_btn_nointerest_card.gif" alt="무이자카드보기"></span>
                            </li>
                            <li>
                                <span>상품코드</span>
                                <span id="gcode">{{$store.state.gdata[$route.params.id-1].ginfo[2]}}</span>
                            </li>
                            <li>
                                <span>사이즈</span>
                                <span>95 100 105 110</span>
                            </li>
                            <li>
                                <span>구매수량</span>
                                <span>
                                    <input type="text" id="sum" value="1">
                                    <!--
                                    readonly 속성은 직접입력을 막음
                                    disable 속성은 입력창의 비활성화
                                    -->
                                    <b class="chg_num">
                                        <img src="images/cnt_up.png" alt="증가">
                                        <img src="images/cnt_down.png" alt="감소">
                                    </b>
                                </span>
                            </li>
                            <li>
                                <span>컬러</span>
                                <span></span>
                            </li>
                            <li>
                                <span>권장계절</span>
                                <span>여름</span>
                            </li>
                            <li class="tot">
                                <span>총합계</span>
                                <span id="total">니가계산해!</span>
                            </li>
                        </ol>

                    </div>
                    <div>
                        <!--버튼영역-->
                        <button class="btn btn1" @click="$store.commit('setClick',$route.params.id-1)">BUY NOW</button>
                        <button class="btn">SHOPPING CART</button>
                        <button class="btn">WISH LIST</button>

                    </div>
                </section>
            </div>
        </div>
    </div>
`,
};

const router = new VueRouter({
    routes: [
        {
            path: "/glist",
            component: Glist,
        },
        {
            path: "/paging",
            component: Paging,
        },
        {
            path: "/more",
            component: More,
        },
        {
            name: "det",
            path: "/dtail",
            component: Detail,
        },
    ], 
    // 라우터 호출시 스크롤위치 최상단 자동이동코드!!!
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});


export default router;
