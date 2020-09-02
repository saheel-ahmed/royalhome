var Property = {
    template: `
    <div>
    <header-layout ></header-layout>
    <div class="page-title-wrap">
       <div class="container p-0">
          <div class="d-flex align-items-center property-title-price-wrap justify-content-between">
             <div class="page-title">
                <h1>{{properties.Property_Title}}</h1>
             </div>
             <div>
                <span class="item-price">{{Number(properties.Price).toLocaleString()}} AED</span>
             </div>
          </div>
          <div class="property-labels-wrap">
             <span class="label-featured label" v-if="properties.Featured == '1'">Featured</span>
             <a class="label-status label status-color-28">
             For {{properties.Ad_Type}}
             </a>        
          </div>
          <address class="item-address"><i class="houzez-icon icon-pin mr-1"></i>{{properties.Property_Name}}, {{properties.Community}}, {{properties.Emirate}}</address>
       </div>
    </div>
    <div class="property-top-wrap">
       <div class="property-banner">
          <div class="container">
             <div class="row">
                <div class="col-md-8">
                   <a v-bind:href="properties.Images.image[0]" class="img-wrap-1" data-toggle="lightbox" data-gallery="property-lightbox" data-type="image">
                   <img class="img-fluid" v-bind:src="properties.Images.image[0]" alt="">
                   </a>
                </div>
                <div class="col-md-4 d-none d-sm-block">
                   <a v-bind:href="properties.Images.image[1]" data-toggle="lightbox" data-gallery="property-lightbox" data-type="image" class="swipebox img-wrap-2">
                   <img class="img-fluid" v-bind:src="properties.Images.image[1]" alt="">
                   </a>
                   <a v-bind:href="properties.Images.image[2]" data-toggle="lightbox" data-gallery="property-lightbox" data-type="image" class="swipebox img-wrap-3">
                      <div class="img-wrap-text">{{(properties.Images.image.length - 3)}} More</div>
                      <img class="img-fluid" v-bind:src="properties.Images.image[2]" alt="">
                   </a>
                </div>
                <a v-for="img in properties.Images.image.slice(3)" v-bind:href="img" data-toggle="lightbox" data-gallery="property-lightbox"></a>
                <div class="col-md-12">
                   <div class="block-wrap">
                      <div class="d-flex property-overview-data">
                         <ul class="list-unstyled flex-fill">
                            <li><strong>{{properties.Unit_Type}}</strong></li>
                            <li class="property-overview-type">Property Type</li>
                         </ul>
                         <ul class="list-unstyled flex-fill">
                            <li class="property-overview-item">
                               <strong>{{properties.Property_Ref_No}}</strong> 
                            </li>
                            <li class="h-prop-id">Property ID</li>
                         </ul>
                         <ul class="list-unstyled flex-fill">
                            <li class="property-overview-item"><i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i> <strong>{{properties.No_of_Rooms}}</strong> </li>
                            <li class="h-beds">Bedrooms</li>
                         </ul>
                         <ul class="list-unstyled flex-fill">
                            <li class="property-overview-item"><i class="houzez-icon icon-bathroom-shower-1 mr-1"></i> <strong>{{properties.No_of_Bathroom}}</strong></li>
                            <li class="h-baths">Bathrooms</li>
                         </ul>
                         <ul class="list-unstyled flex-fill" v-if="Number(properties.Parking) > 0">
                            <li class="property-overview-item"><i class="houzez-icon icon-car-1 mr-1"></i> <strong>{{properties.Parking}}</strong></li>
                            <li class="h-area">Parking</li>
                         </ul>
                         <ul class="list-unstyled flex-fill">
                            <li class="property-overview-item"><i class="houzez-icon icon-real-estate-dimensions-plan-1 mr-1"></i> <strong>{{Number(properties.Unit_Builtup_Area).toFixed(0)}}</strong></li>
                            <li class="h-area"></li>
                         </ul>
                      </div>
                      <!-- d-flex -->
                   </div>
                   <!-- block-wrap -->
                </div>
             </div>
          </div>
       </div>
    </div>
    <div class="col-md-12 bt-content-wrap">
       <div class="property-view">
          <div class="property-description-wrap property-section-wrap" id="property-description-wrap">
             <div class="block-wrap">
                <div class="block-title-wrap">
                   <h2>Description</h2>
                </div>
                <div class="block-content-wrap" v-html="properties.Web_Remarks">
                  
                </div>
             </div>
          </div>
          <div class="property-detail-wrap property-section-wrap" id="property-detail-wrap">
             <div class="block-wrap">
                <div class="block-title-wrap d-flex justify-content-between align-items-center">
                   <h2>Details</h2>
                   <span class="small-text grey"><i class="houzez-icon icon-calendar-3 mr-1"></i> Updated on {{properties.Last_Updated}}</span>
                </div>
                <!-- block-title-wrap -->
                <div class="block-content-wrap">
                   <div class="detail-wrap">
                      <ul class="list-2-cols list-unstyled">
                         <li>
                            <strong>Property ID:</strong> 
                            <span>{{properties.Property_Ref_No}}</span>
                         </li>
                         <li>
                            <strong>Price:</strong> 
                            <span> {{Number(properties.Price).toLocaleString()}} AED</span> <span v-if="properties.Frequency != undefined">{{properties.Frequency}}</span>
                         </li>
                         <li>
                            <strong>Property Size:</strong> 
                            <span>{{Number(properties.Unit_Builtup_Area).toFixed(0)}} </span>
                         </li>
                         <li>
                            <strong>Bedrooms:</strong> 
                            <span>{{properties.No_of_Rooms}}</span>
                         </li>
                         <li>
                            <strong>Bathrooms:</strong> 
                            <span>{{properties.No_of_Bathroom}}</span>
                         </li>
                         <li v-if="Number(properties.Parking) > 0">
                            <strong>Parking:</strong> 
                            <span>{{properties.Parking}}</span>
                         </li>
                         <li class="prop_type">
                            <strong>Property Type:</strong> 
                            <span>{{properties.Unit_Type}}</span>
                         </li>
                         <li class="prop_status">
                            <strong>Property Status:</strong> 
                            <span>For {{properties.Ad_Type}}</span>
                         </li>
                         <li class="location">
                         <strong>Location:</strong> <span>{{properties.Property_Name}}, {{properties.Community}}, {{properties.Emirate}}</span></li>
                      </ul>
                   </div>
                </div>
                <!-- block-content-wrap -->
             </div>
             <!-- block-wrap -->
          </div>
          <div class="property-features-wrap property-section-wrap" id="property-features-wrap">
             <div class="block-wrap">
                <div class="block-title-wrap d-flex justify-content-between align-items-center">
                   <h2>Aminities</h2>
                </div>
                <!-- block-title-wrap -->
                <div class="block-content-wrap">
                   <ul class="list-3-cols list-unstyled">
                      <li v-for="feature in properties.Facilities.facility"><i class="houzez-icon icon-check-circle-1 mr-2"></i>{{feature}}</li>
                   </ul>
                </div>
                <!-- block-content-wrap -->
             </div>
             <!-- block-wrap -->
          </div>
          <div class="property-address-wrap property-section-wrap" id="property-address-wrap">
             <div class="block-wrap">
                <div class="block-title-wrap d-flex justify-content-between align-items-center">
                   <h2>Address</h2>
                   <a class="btn btn-primary btn-slim" v-bind:href="'http://maps.google.com/?q='+ properties.Property_Name +',' +properties.Community+','+ properties.Emirate" target="_blank"><i class="houzez-icon icon-maps mr-1"></i> Open on Google Maps</a>
                </div>
                <!-- block-title-wrap -->
                <div class="block-content-wrap">
                   <ul class="list-2-cols list-unstyled">
                      <li class="detail-city"><strong>Location</strong> <span>{{properties.Community}}</span></li>
                      <li class="detail-state"><strong>City</strong> <span>{{properties.Emirate}}</span></li>
                      <li class="detail-area"><strong>Sub-Location &amp; Building</strong> <span>{{properties.Property_Name}}</span></li>
                      <li class="detail-country"><strong>Country</strong> <span></span></li>
                   </ul>
                </div>
                <!-- block-content-wrap -->
             </div>
             <!-- block-wrap -->
          </div>
          <div class="property-contact-agent-wrap property-section-wrap" id="property-contact-agent-wrap">
             <div class="block-wrap">
                <div class="block-title-wrap d-flex justify-content-between align-items-center">
                   <h2>Contact Information</h2>
                   <router-link :to="'/agent/'+ getAgentName(properties.Listing_Agent)" class="btn btn-primary btn-slim">
                        View Listings
                   </router-link>
                </div>
                <!-- block-title-wrap -->
                <div class="block-content-wrap">
                <ul class="agent-information list-unstyled">
                    <li class="agent-name"><i class="houzez-icon icon-single-neutral mr-1"></i> {{properties.Listing_Agent}}</li>
                    <li class="agent-phone-wrap clearfix"><i class="houzez-icon icon-phone mr-1"></i><span class="agent-phone ">{{properties.Listing_Agent_Phone}}</span></li>
                    <li class="agent-email"><i class="houzez-icon icon-envelope mr-1"></i> {{properties.Listing_Agent_Email}}</li>
                </ul>
                </div>
                <!-- block-content-wrap -->
             </div>
             <!-- block-wrap -->
          </div>
       </div>
    </div>
 </div>`,
    data: function () {
        return {
            properties: [],
            property: {
                name: 'Property name here'
            }
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    created() {
        console.log(this.$route.params.title)
        // fetch the data when the view is created and the data is
        // already being observed

        this.fetchData();
    },
    methods: {
        fetchData: function () {
            let self = this;

            $.getJSON('https://royalhome.ae/api/properties/', function (res) {
                self.properties = res.Listing.filter(_res => _res.Property_Ref_No == self.$route.params.title);
                self.properties = self.properties[0];
            });
        },
        getAgentName(_name){
            return _name.trim().toLowerCase().replace(' ', '-');
        }
    }
}