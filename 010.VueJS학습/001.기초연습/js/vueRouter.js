var Trip = {
    template: '<div class="trip router"> World Trip </div>'
};
var Foods = {
    template: `
    <div v-bind:class="'foods router '+this.$route.params.cls"> 
        World Foods {{ this.$route.params.item }}
    </div>`
};

var routes = [{
    path: '/trip',
    component: Trip
}, 
{
    path: '/foods',
    component: Foods
},
{
    name: 'foods',
    path: '/foods:item',
    component: Foods
},
];

var router = new VueRouter({
    routes
});

new Vue({
    el:"#app",
    router,
})