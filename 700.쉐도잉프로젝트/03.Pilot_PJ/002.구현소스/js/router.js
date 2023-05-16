
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
            path: "/paging",
            component: Paging,
        },
        {
            path: "/more",
            component: More,
        },
        {
            name: "deT",
            path: "/dtail",
            component: Detail,
        },
    ],
});

export default router;
