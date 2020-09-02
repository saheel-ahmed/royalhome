var Properties = {
    template: `
        <div>
           <header-layout></header-layout>
                <div class="search-wrapper">
                <div class="container">
                <div class="row">
                <div class="col-12">
                    <div class="input-group mb-0">
                        <input v-model="searchQuery" type="search" class="form-control" placeholder="Search....">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">Go</button>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
           </div>
           <div class="container mt-4">
            <div class="row">
                <div class="col-sm-4 ml-auto text-right mb-3">
                <span>Sort By:</span>
                <select v-model="sortby" class="sort-select" @change="sortChange()">
                <option value="0">Default Order</option>
                <option value="1">Price - Low to High</option>
                <option value="2">Price - High to Low</option>
                </select>
                
                  </div>
            </div>
           <div class="row">
              <div class="col-sm-4 mb-4" v-for="(property, index) in filterProperties(properties)" :key="index">
                 <div class="item-listing-wrap shadow">
                    <div class="item-wrap item-wrap-v3 h-100">
                       <div class="item-head">
                          <span class="label-featured" v-if="property.Featured == '1'">Featured</span>
                          <div class="labels-wrap labels-right">
                          <router-link :to="'/properties/'+property.Ad_Type.toLowerCase()" class="label-status label status-color-28">For {{property.Ad_Type}}</router-link>
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
        </div>`,
    data: function() {
        return {
            properties: [],
            searchQuery: '',
            loading: true,
            sortby: '0'
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
        fetchData: function() {
            let self = this;
            $.getJSON('https://royalhome.ae/api/properties/', function(res) {
                self.properties = res.Listing.filter(i=>i.Ad_Type.toLowerCase() == self.$route.params.type.toLowerCase());
                self.loading = false;
            });

        },
        filterProperties: function(presets) {
            let self = this;
            return self.properties.filter(function(property) {
                let regex = new RegExp('(' + self.searchQuery + ')', 'i');
                return property.Property_Title.match(regex) || property.Ad_Type.match(regex);
            });
        },
        getAgentName: function(_name){
            return _name.trim().toLowerCase().replace(' ', '-');
        },
        sortChange(){
            if(this.sortby == '1'){
                this.properties.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
            }else if(this.sortby == '2'){
                this.properties.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
            }else if(this.sortby == '0'){
                this.fetchData();
            }
        }
    }
}