var Home = {
    template: `
    <div>
    <header-layout></header-layout>
    <div class="search-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="input-group mb-0">
                        <input v-model="searchQuery" type="search" @change="searchProperty()" class="form-control" placeholder="Search....">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">Go</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container" style="margin-top: 20px;">
        <div class="page-title-wrap no-bg pt-0">
            <div class="breadcrumb-wrap">
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="http://royalhome.ae/"><span>Home</span></a></li>
                        <li class="breadcrumb-item active">Properties in Dubai</li>
                    </ol>
                </nav>
            </div>
            <div class="page-title mt-2">
                <h1 class="text-left">Properties In Dubai</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-8">
                        <div class="listing-tabs flex-grow-1">
                            <ul class="nav nav-tabs property-type-filter">
                                <li class="nav-item">
                                    <button class="nav-link" @click="selectType('all')"
                                        v-bind:class="{ active: selectedType == 'all'}">ALL</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link" @click="selectType('sale')"
                                        v-bind:class="{ active: selectedType == 'sale'}">SALE</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link" @click="selectType('rent')"
                                        v-bind:class="{ active: selectedType == 'rent'}">RENT</button>
                                </li>
                            </ul>
                        </div>
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
                    <div class="col-sm-6 mb-4" v-for="(property, index) in displayedProperties"
                        :key="index">
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
                                    <address class="item-address">{{property.Property_Name}}, {{property.Community}},
                                        {{property.Emirate}}</address>
                                    <ul class="item-amenities">
                                        <li><i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i>
                                            <span>{{property.No_of_Rooms}}</span></li>
                                        <li><i class="houzez-icon icon-bathroom-shower-1 mr-1"></i>
                                            <span>{{property.No_of_Bathroom}}</span></li>
                                        <li v-if="Number(property.Parking) > 0"><i
                                                class="houzez-icon icon-car-1 mr-1"></i>
                                            <span>{{property.Parking}}</span></li>
                                        <li><i class="houzez-icon icon-ruler-triangle mr-1"></i>
                                            <span>{{Number(property.Unit_Builtup_Area).toFixed(0)}}</span></li>
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
                <nav aria-label="Page navigation example">
			<ul class="pagination">
				<li class="page-item">
					<button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
				</li>
				<li class="page-item">
					<button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
				</li>
				<li class="page-item">
					<button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
				</li>
			</ul>
		</nav>	
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="theiaStickySidebar">
                    <aside id="sidebar" class="sidebar-wrap">
                        <div class="widget widget-wrap widget-featured-property">
                            <div class="widget-header">
                                <h3 class="widget-title">Featured Listings</h3>
                            </div>
                            <div class="widget-body widget-featured-property-slider-wrap">
                                <div class="featured-products">
                                    <div class="item-listing-wrap" v-for="property in featuredProperties">
                                        <div class="item-wrap item-wrap-v3">
                                            <div class="item-head">
                                                <span class="label-featured">Featured</span>
                                                <div class="labels-wrap labels-right">
                                                <router-link :to="'/properties/'+property.Ad_Type.toLowerCase()" class="label-status label status-color-28">For {{property.Ad_Type}}</router-link>
                                                </div>
                                                <div class="item-price-wrap">
                                                    <span class="item-price">{{Number(property.Price).toLocaleString()}}
                                                        AED</span><br>
                                                        <small>{{property.Property_Name}}, {{property.Community}},
                                                        {{property.Emirate}}</small>
                                                </div>
                                                <router-link :to="'/property/'+ property.Property_Ref_No"
                                                    class="hover-effect">
                                                    <img class="img-fluid" v-bind:src="property.Images.image[0]">
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="widget widget-wrap widget-taxonomy mt-3">
                            <div class="widget-header">
                                <h3 class="widget-title">Popular Areas</h3>
                            </div>
                            <div class="widget-body city-properties hide-all" v-bind:class="{'show-all': showFlag == true}">
                                <ul>
                                    <li v-for="item in propertiesByCity">
                                        <router-link :to="'/city/'+getCityName(fetchPropertyName(item))">{{fetchPropertyName(item)}}</router-link>
                                        <span class="cat-count">{{fetchPropertyLenght(item)}}</span>
                                    </li>
                                </ul>
                                <div class="show-hide">
                                    <button class="btn btn-primary btn-block btn-sm" @click="showAllCities()">{{ showFlag == true ? 'View Less':'View More'}}</button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>`,
    data: function () {
        return {
            properties: [],
            filteredProperties: [],
            featuredProperties: [],
            propertiesByCity: [],
            page: 1,
            perPage: 9,
            pages: [],
            searchQuery: '',
            loading: true,
            filterType: '1',
            propertyType: '',
            location: 'all',
            bedroom: '',
            selectedType: 'all',
            sortby: '0',
            showFlag: false
        }
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData();
    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData',
        filteredProperties(){
                this.setPages();
                debugger;
        },
    },
    methods: {
        fetchData: function () {
            let self = this;
            $.getJSON('https://royalhome.ae/api/properties/', function (res) {
                self.properties = res.Listing;
                self.filteredProperties = self.properties;
                self.featuredProperties = self.properties.slice(0, 8);
                self.propertiesByCity = self.groupBy(self.properties, 'Community');

                const tempData = Object.keys(self.propertiesByCity);
                for (var tdata in tempData) {
                    let propKey = tempData[parseInt(tdata)];
                    let propValue = self.propertiesByCity[propKey];
                    var propObj = {};
                    propObj[propKey] = propValue
                    tempData[parseInt(tdata)] = propObj;
                }

                self.propertiesByCity = tempData.sort(function (a, b) {
                    return b[Object.keys(b)[0]].length - a[Object.keys(a)[0]].length;
                });
                
                self.loading = false;
                
                setTimeout(() => {
                    self.callSlick();
                }, 1000);
            });
        },
        filterProperties: function () {
            let self = this;
            return self.filteredProperties.filter(function (property) {
                let regex = new RegExp('(' + self.searchQuery + ')', 'i');
                return property.Property_Title.match(regex) || property.Ad_Type.match(regex);
            });
        },
        searchType: function (type) {
            this.filterType = type;
        },
        getAgentName: function (_name) {
            return _name.trim().toLowerCase().replace(/ /gi, '-');
        },
        showAllCities(){
            debugger;
            this.showFlag =! this.showFlag;
        },
        SearchQuery: function () {
            router.push({
                path: 'search-results',
                query: {
                    type: this.filterType,
                    unittype: this.propertyType,
                    location: this.location,
                    bedroom: this.bedroom
                }
            })
        },
        propertyByType(_type) {
            this.filteredProperties = this.properties.filter(i => i.Ad_Type.toLowerCase() == _type)
        },
        sortChange() {
            if (this.sortby == '1') {
                this.properties.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
            } else if (this.sortby == '2') {
                this.properties.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
            } else if (this.sortby == '0') {
                this.fetchData();
            }
        },
        selectType(_type) {
            this.selectedType = _type;
            if (_type == 'all') {
                this.filteredProperties = this.properties;
            } else {
                this.propertyByType(this.selectedType);
            }
        },
        groupBy(array, key) {
            // Return the end result
            return array.reduce((result, currentValue) => {
                // If an array already present for key, push it to the array. Else create an array and push the object
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                    currentValue
                );
                // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
                return result;
            }, {}); // empty object is the initial value for result object
        },
        fetchPropertyName(_obj) {
            return Object.keys(_obj)[0];
        },
        fetchPropertyLenght(_obj){
            return _obj[Object.keys(_obj)].length;
        },
        callSlick() {
            $('.featured-products').slick({
                rtl: false,
                lazyLoad: 'ondemand',
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                adaptiveHeight: true,
                dots: true,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        },
        getCityName: function (_name) {
            return _name.trim().toLowerCase().replace(/ /gi, '-');
        },
        searchProperty(){

        },
        setPages () {
			let numberOfPages = Math.ceil(this.filteredProperties.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (properties) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
            let to = (page * perPage);
			return  properties.slice(from, to);
		}
    },
    filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
    },
    computed: {
		displayedProperties () {
            console.log('this.paginate(this.filteredProperties)', this.paginate(this.filteredProperties))
			return this.paginate(this.filteredProperties);
		}
	}
}