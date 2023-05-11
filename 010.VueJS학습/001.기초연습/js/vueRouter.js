import router from "./router.js";

const linkData = {
    세계여행사: { path: "/trip" },
    "세계먹거리:피자": { name: "foods", params: { item: "피자", cls: "pizza" } },
    "세계먹거리:파스타": { name: "foods", params: { item: "파스타", cls: "pasta" } },
    "세계먹거리:똠양꿍": { name: "foods", params: { item: "똠양꿍", cls: "ddom" } },
};
const linkData2 = {
    세계여행사: { link: { path: "/trip" }, menu: [] },
    세계먹거리: {
        link: { path: "/foods" },
        menu: {
            "피자": { name: "foods", params: { item: "피자", cls: "pizza" } },
            "파스타": { name: "foods", params: { item: "파스타", cls: "pasta" } },
            "똠양꿍": { name: "foods", params: { item: "똠양꿍", cls: "ddom" } },
        },
    },
};

new Vue({
    el: "#app",
    router,
    data: {
        linkData: linkData2,
    },
    mounted() {
        this.$router.push('/trip')
    },
});
