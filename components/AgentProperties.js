var AgentProperties = {
    template: `
    <div>
    <header-layout></header-layout>
    <div class="container-fluid" style="margin-top: 20px;">
         <div class="container">
         <div class="row agent-details shadow align-items-center">
         <div class="col-sm-8">
            <b>{{properties[0].Listing_Agent}}</b> has listed <b>{{properties.length}}</b> Properties
         </div>
         <div class="col-sm-4 text-right">
                <a v-bind:href="'mailto:'+properties[0].Listing_Agent_Email" class="btn btn-sm btn-primary"><i class="houzez-icon icon-envelope"></i></a>
                <a v-bind:href="'tel:'+properties[0].Listing_Agent_Phone" class="btn btn-sm btn-primary"><i class="houzez-icon icon-mobile-phone"></i></a>
         </div>
         </div>
         <div class="row mb-3 align-items-center">
            <div class="col-sm-8">
            <ul class="nav nav-pills property-type-filter">
  <li class="nav-item">
    <button class="nav-link" @click="selectType('all')" v-bind:class="{ active: selectedType == 'all'}">ALL</button>
  </li>
  <li class="nav-item">
  <button class="nav-link" @click="selectType('sale')" v-bind:class="{ active: selectedType == 'sale'}">SALE</button>
  </li>
  <li class="nav-item">
  <button class="nav-link" @click="selectType('rent')" v-bind:class="{ active: selectedType == 'rent'}">RENT</button>
  </li>
</ul>
          </div>
          <div class="col-sm-4 text-right">
          <span>Sort By:</span>
          <select v-model="sortby" class="sort-select" @change="sortChange()">
          <option value="0">Default Order</option>
          <option value="1">Price - Low to High</option>
          <option value="2">Price - High to Low</option>
          </select>
          
            </div>
         </div>
             <div class="row">
                 <div class="col-sm-4 mb-4" v-for="(property, index) in filteredProperties" :key="index">
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
                             <a href="#">{{property.Listing_Agent}}</a>
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
    data: function() {
        return {
            properties: [],
            filteredProperties: [],
            agentName: '',
            selectedType: 'all',
            sortby: '0',
            agentProperties: [{
                name: 'Property 1'
            }]
        }
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData();
    },
    methods:{
        fetchData: function () {
            let self = this;
            self.agentName = self.$route.params.agentName;
            $.getJSON('https://royalhome.ae/api/properties/', function (res) {
                self.properties = res.Listing.filter(i => i.Listing_Agent.toLowerCase() == self.agentName);
                self.filteredProperties = self.properties;
                console.log(self.properties);
                self.loading = false;
            });
        },
        sortChange(){
            if(this.sortby == '1'){
                this.properties.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
            }else if(this.sortby == '2'){
                this.properties.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
            }else if(this.sortby == '0'){
                this.fetchData();
            }
        },
        propertyByType(_type){
            this.filteredProperties = this.properties.filter(i=>i.Ad_Type.toLowerCase() == _type)
        },
        selectType(_type){
            this.selectedType = _type;
            if(_type == 'all'){
                this.filteredProperties = this.properties;
            }else{
                this.propertyByType(this.selectedType);
            }
        }
    }
}