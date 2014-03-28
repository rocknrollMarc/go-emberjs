// the ThingsCreateRoute is an extend of the ThingCreateAndEditRoute
App.ThingsCreateRoute = App.ThingCreateAndEditRoute.extend({
    model: function(){
        // the model for this route is a new empty Ember.Object
        return this.store.createRecord('thing');
    },

    // in this case (the create route) we can re-use the thing/edit template
    // associated with the thingsCreateController
    renderTemplate: function(){
        this.render('thing.edit', {
            controller: 'thingsCreate'
        });
    }
});
