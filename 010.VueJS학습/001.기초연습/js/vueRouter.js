
var Trip = {
    template: '<div class="trip router"> World Trip </div>'
};
var Foods = {
    template: '<div class="foods router"> World Foods </div>'
};

var routes = [{
    path: '/trip',
    component: Trip
}, {
    path: '/foods',
    component: Foods
}];

var router = new VueRouter({
    routes
});

new Vue({
    el:"#app",
    router,
})