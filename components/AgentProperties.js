var AgentProperties = {
    template: `
        <div>
           <header-layout></header-layout>
           
           <h1>Agent Properties List</h1>
           <p>{{agentProperties[0].name}}</p>

        </div>`,
    data: function() {
        return {
            agentProperties: [{
                name: 'Property 1'
            }]
        }
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed

        //this.fetchData();
    }
}