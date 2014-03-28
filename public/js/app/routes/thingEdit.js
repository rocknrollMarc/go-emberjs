// the ThingEditRoute is an extend of the ThingCreateAndEditRoute
App.ThingEditRoute = App.ThingCreateAndEditRoute.extend({
    model: function() {
        // here we tell the route to use its parent model
        return this.modelFor('thing');
    },
    actions: {
        goBack: function(){
            this.transitionTo('thing');
        }
    }
});
