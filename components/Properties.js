var Properties = {
    template: `
        <div>
           <header-layout></header-layout>
           
           <div class="container-fluid" style="margin-top: 20px;">
                <h3>
                    Properties
                </h3>

                <div>
                    
                    <div class="input-group mb-3">
                        <input v-model="searchQuery" type="search" class="form-control" placeholder="Search....">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Search</button>
                        </div>
                    </div>

                </div>
                
                <div class="table-responsive">
                    <table class="table table-sm table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Property_Ref_No</th>
                            <th scope="col">Property_Title</th>
                            <th scope="col">Ad_Type</th>
                            <th scope="col">Unit_Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="loading">
                            <td colspan="5">Please wait....</td>
                        </tr>
                        <tr v-for="(property, index) in filterProperties(properties)" :key="index">
                            <td scope="col">{{index+1}}</td>
                            <td scope="col">{{property.Property_Ref_No}}</td>
                            <td scope="col">{{property.Property_Title}}</td>
                            <td scope="col">{{property.Ad_Type}}</td>
                            <td scope="col">{{property.Unit_Type}}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
           </div>

        </div>`,
    data: function() {
        return {
            properties: [],
            searchQuery: '',
            loading: true
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
                self.properties = res.Listing;
                self.loading = false;
            });

        },
        filterProperties: function(presets) {
            let self = this;
            return self.properties.filter(function(property) {
                let regex = new RegExp('(' + self.searchQuery + ')', 'i');
                return property.Property_Title.match(regex) || property.Ad_Type.match(regex);
            });
        }
    }
}