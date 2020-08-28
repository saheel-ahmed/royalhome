Vue.component('header-layout', {
    template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <router-link class="navbar-brand" to="https://saheel-ahmed.github.io/royalhome">Royal Homes</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" @click="toggleMenu()">
            <span class="navbar-toggler-icon"></span>
        </button>  
        
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/property/123">Property</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/agent/123">Agents</router-link>
            </li>
        </ul>
        
    </nav>
    `,
    data: function() {
        return {
            menuOpen: false,
            dropdownMenu: false
        }
    },
    methods: {
        toggleMenu: function() {
            if (this.menuOpen)
                this.menuOpen = false;
            else
                this.menuOpen = true;
        }
    }
});