
const Glist = {
    template: `
    <section>
        <div id="optbx">
            <label for="men">남성</label>
            <input type="checkbox" id="men" v-model="$store.state.chkarr[0]" @change="$store.commit('resCheck')" checked>
            <label for="women">여성</label>
            <input type="checkbox" id="women" v-model="$store.state.chkarr[1]" @change="$store.commit('resCheck')" checked>
            <label for="style">스타일</label>
            <input type="checkbox" id="style" v-model="$store.state.chkarr[2]" @change="$store.commit('resCheck')" checked>


            <button @click="$store.commit('sorting')">적용</button>
        </div>
        <div class="grid">
            <div 
            v-for="(v,i) in $store.state.gdata" 
            v-if="v.cat==$store.state.selnm[0]||
            v.cat==$store.state.selnm[1]||
            v.cat==$store.state.selnm[2]">    
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
    </section>
    `,
};
const Detail = {
    template: `
        <h1>상세뷰야</h1>
    `,
};

const router = new VueRouter({
    routes: [
        {
            path: "/glist",
            component: Glist,
        },
        {
            name: "deT",
            path: "/dtail",
            component: Detail,
        },
    ],
});

export default router;
