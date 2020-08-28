var Property = {
    template: `
        <div>
           <header-layout></header-layout>

           <h1>Property</h1>
           <p>{{property.name}}</p>
           
        </div>`,
    data: function() {
        return {
            property: {
                name: 'Property name here'
            }
        }
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed

        //this.fetchData();
    }
}