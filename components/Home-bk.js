var Home = {
    template: `
        <div>
           <header-layout></header-layout>
            <section class="main-header">
            <div class="jumbotron home">
            <div class="content">
            <h1>Welcome To Royal Home</h1>
            <p class="lead">We have earmarked prime areas to ensure that we present you with the properties that exceed your expectations. Similarly the extensive guideline developed for the customers will offer a lending hand in locating the ideal property within UAE.</p>
            </div>
          </div>
            </section>
            <section class="property-search-wrapper">
            <div class="container">
            <div class="property-search">
            <div class="property-search-buttons">
                <ul class="list-unstyled d-flex justify-content-center mb-0">
                    <li><button @click="searchType('1')" v-bind:class="{ active: filterType == '1'}" class="btn">All Status</button></li>
                    <li><button @click="searchType('2')" v-bind:class="{ active: filterType == '2'}" class="btn">For Rent</button></li>
                    <li><button @click="searchType('3')" v-bind:class="{ active: filterType == '3'}" class="btn">For Sale</button></li>
                </ul>
                </div>
                <div class="property-search-form shadow px-3 py-4">
                <form novalidate>
                    <div class="row no-gutters">
                        <div class="col mx-1">
                        <div class="form-group mb-0">
                        <label for="lookingfor">LOOKING FOR</label>
                        <select class="form-control" v-model="propertyType">
                            <option value="" selected disabled>Property Type</option>
                            <option value="apartment">Apartment</option>
                            <option value="duplex">Duplex</option>
                            <option value="penthouse">Penthouse</option>
                            <option value="studio">Studio</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="villa">Villa</option>
                        </select>
                      </div>
                        </div>
                        <div class="col mx-1">
                        <div class="form-group mb-0">
                        <label>LOCATION</label>
                        <select class="form-control" v-model="location">
                        <option value="all" selected>All Location</option>
                        <option value="dubai">Dubai</option>
                        </select>
                      </div>
                        </div>
                        <div class="col mx-1">
                        <div class="form-group mb-0">
                        <label>PROPERTY SIZE</label>
                        <select class="form-control" v-model="bedroom">
                        <option value="" selected disabled>Bedrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="any">Any</option>
                        </select>
                      </div>
                        </div>
                        <div class="col mx-1">
                        <div class="form-group d-flex align-items-end h-100 mb-0">
                        <button class="btn btn-theme btn-block" @click="SearchQuery()" type="submit">Submit</button>
                      </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
            </section>
           <div class="container-fluid" style="margin-top: 20px;">
           <div class="section_title_wrap mt-5">
           <h2 class="section_title">Discover Our Listings</h2>

           <p class="section_subtitle">We offer a wide selection of properties depending upon the client’s need, budget and preferences.</p>
   </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 mb-4" v-for="(property, index) in filterProperties(properties)" :key="index">
                        <div class="item-listing-wrap shadow">
                        <div class="item-wrap item-wrap-v3 h-100">
                            <div class="item-head">
                                <span class="label-featured" v-if="property.Featured == '1'">Featured</span>
                                <div class="labels-wrap labels-right">
                                    <a href="" class="label-status label status-color-28">For {{property.Ad_Type}}</a>
                                </div>
                                <div class="item-price-wrap">
                                    <span class="item-price">{{Number(property.Price).toLocaleString()}} AED</span>
                                </div>
                                <router-link :to="'/property/'+ property.Property_Ref_No" class="hover-effect">
                                <img class="img-fluid" v-bind:src="property.Images.image[0]">
                                </router-link>
                            </div>
                            <div class="item-body flex-grow-1 p-3">
                                <h2 class="item-title">{{property.Property_Title}}</h2>
                                <address class="item-address">{{property.Property_Name}}, {{property.Community}}, {{property.Emirate}}</address>
                                <ul class="item-amenities">
                                    <li><i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i> <span>{{property.No_of_Rooms}}</span></li>
                                    <li><i class="houzez-icon icon-bathroom-shower-1 mr-1"></i> <span>{{property.No_of_Bathroom}}</span></li>
                                    <li v-if="Number(property.Parking) > 0"><i class="houzez-icon icon-car-1 mr-1"></i> <span>{{property.Parking}}</span></li>
                                    <li><i class="houzez-icon icon-ruler-triangle mr-1"></i> <span>{{Number(property.Unit_Builtup_Area).toFixed(0)}}</span></li>
                                </ul>
                                <div><span>{{property.Unit_Type}}</span></div>
                            </div>
                            <div class="item-footer">
                                <div class="item-author">
                                <i class="houzez-icon icon-single-neutral mr-1"></i>
                                    <router-link :to="'/agent/'+ getAgentName(property.Listing_Agent)">
                                            {{property.Listing_Agent}}
                                    </router-link>
                                </div>
                                <div class="item-date">
                                <i class="houzez-icon icon-attachment mr-1"></i>
                                    {{property.Listing_Date}}
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
           </div>

        </div>`,
    data: function () {
        return {
            properties: [],
            searchQuery: '',
            loading: true,
            filterType: '1',
            propertyType: '',
            location: 'all',
            bedroom: ''

        }
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData();
    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function () {
            let self = this;

            $.getJSON('https://royalhome.ae/api/properties/', function (res) {
                self.properties = res.Listing;
                self.loading = false;
            });
        },
        filterProperties: function (presets) {
            let self = this;
            return self.properties.filter(function (property) {
                let regex = new RegExp('(' + self.searchQuery + ')', 'i');
                return property.Property_Title.match(regex) || property.Ad_Type.match(regex);
            });
        },
        searchType: function (type) {
            this.filterType = type;
        },
        getAgentName: function(_name){
            return _name.trim().toLowerCase().replace(' ', '-');
        },
        SearchQuery: function(){
            router.push(
                {
                  path: 'search-results',
                  query: { type: this.filterType, unittype: this.propertyType, location: this.location, bedroom: this.bedroom }
                }
              )
        }
    }
}