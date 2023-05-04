import store from "./store.js";

Vue.component("top-area", {
    template: `
                <header>
                    <ul class="gnb">
                        <li v-on:click="chgImg('서울')">
                            <a href="#">서울</a>
                        </li>
                        <li v-on:click="chgImg('부산')">
                            <a href="#">부산</a>
                        </li>
                        <li v-on:click="chgImg('제주')">
                            <a href="#">제주</a>
                        </li>
                    </ul>
                </header>
                    
                `,
    data() {
        return {};
    },
    methods: {
        chgImg(n) {
            console.log(n, store.state.cityData[n].이미지);
            store.state.imgsrc = store.state.cityData[n].이미지;
            store.state.desc = store.state.cityData[n].설명;
        },
    },
});
Vue.component("main-area", {
    template: `
                    <main>
                        <img v-bind:src="$store.state.imgsrc" alt="이미지">
                        <p v-text="$store.state.desc"></p>
                    </main>
                `,
    data() {
        return {
            
        };
    },
    mounted() {
        // commiit('메서드명',파라미터값)
        // 1. 메서드명은 반드시 문자형으로 입력
        // 2. 파라미터는 단일값을 보내거나 객체형식사용가능
        store.commit('initSet',
        {name:store.state.cityData["서울"]["이미지"],age:store.state.cityData["서울"]["설명"]})
        // imgsrc = store.state.cityData["서울"]["이미지"];
        // desc = store.state.cityData["서울"]["설명"];
    },
});
Vue.component("info-area", {
    template: `
                    <footer>
                        <address>
                            서울시 강남구 역삼동 119     
                        </address>
                    </footer>
                `,
});

new Vue({
    el: "#app",
    store,
});
