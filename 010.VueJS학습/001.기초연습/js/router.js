


const Trip = {
    template: `
    <div v-bind:class="'trip router '+this.$route.params.cls"> 
        World Trips {{ this.$route.params.item }}
    </div>`,
};
const Foods = {
    template: `
    <div v-bind:class="'foods router '+this.$route.params.cls"> 
        World Foods {{ this.$route.params.item }}
    </div>`,
};

const router = new VueRouter({
    routes: [
        {
            path: "/trip",
            component: Trip,
        },
        {
            name: "goW",
            path: "/trip:item",
            component: Trip,
        },
        {
            path: "/foods",
            component: Foods,
        },
        {
            name: "foods",
            path: "/foods:item",
            component: Foods,
        },
    ],
});

export default router;
