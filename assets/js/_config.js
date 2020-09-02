const baseURL = '/';
const routes = [{
    path: '/',
    component: Home
}, 
{
    path: '/properties/:type',
    component: Properties
},
{
    path: '/property/:title',
    component: Property
}, {
    path: '/agent/:agentName',
    component: AgentProperties
},
{
    path: '/search-results',
    component: SearchResults
},
{
    path: '/meet-our-team',
    component: OurTeam
},
{
    path: '/city/:name',
    component: CityProperties
}
]

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
})

const app = new Vue({
    router
}).$mount('#app');

