


const Trip = {
    template: '<div class="trip router"> World Trip </div>',
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
