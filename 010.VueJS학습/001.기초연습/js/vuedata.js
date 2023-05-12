import store from "./vuedata-store.js";

Vue.component("my-comp", {
    template: `
        <div class="grid">
            <div v-for="(v,i) in $store.state.items.data">
                <img v-bind:src="'./img_gallery/'+(v.idx>50?1:v.idx)+'.jpg'" alt="dress" />
                <aside>
                    <h2>{{v.gname}}</h2>
                    <h3>{{v.gprice}}</h3>
                </aside>
            </div>
        </div>
    `,
});
new Vue({
    el: "#app",
    store,
    data: {
        items: [], // json데이터 종류(빈객체형 셋팅),
    },
    mounted() {

        // store.dispatch('initData');
        // this.items = store.state.items;
        // console.log("최종:",this.items);

        axios.get("./js/goods.json").then((x) => {
            store.state.items = x;
        });
        // console.log(this.items);
    },
});
