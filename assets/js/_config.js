const baseURL = '/';
const routes = [{
    path: '/',
    component: Properties
}, {
    path: '/property/:title',
    component: Property
}, {
    path: '/agent/:agentName',
    component: AgentProperties
}]

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
})

const app = new Vue({
    router
}).$mount('#app');