Vue.component('header-layout', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-custom" v-bind:class="{ inner: isHome == false}">
        <div class="container">
        <router-link class="navbar-brand" to="/">
            <img v-if="isHome" src="./assets/imgs/logo-white.png"/>
            <img v-if="!isHome" src="./assets/imgs/logo-color.png"/>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/">HOME</router-link>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              PROPERTIES
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" to="/properties/sale">Sale</router-link>
            <router-link class="dropdown-item" to="/properties/rent">Rent</router-link>
            </div>
          </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/">PROPERTY MANAGEMENT</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/meet-our-team">OUR TEAM</router-link>
         </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/">ABOUT</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/">CONTACT</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://dubaipropertysales.ae/en" target="_blank" >OFF-PLAN PROPERTIES</a>
            </li>
            
        </ul>
        </div>
        </div>
    </nav>
    `,
    data: function() {
        return {
            menuOpen: false,
            dropdownMenu: false,
            isHome: true
        }
    },
    created() {
        console.log(this.$route.path);
        debugger;
        if(this.$route.path == '/'){
            this.isHome = true;
        }else{
            this.isHome = false;
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