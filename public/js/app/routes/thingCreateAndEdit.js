// this route will be used by the edit AND the create route
// in other words the edit and the create routes will inherit from this one
App.ThingCreateAndEditRoute = Ember.Route.extend({
    // when trying to manually access the route
    activate: function(){
        this.controllerFor('thing').setProperties({
            'editMode': true,
            'deleteMode': false
        });
    },
    // when trying to manually leave the route
    deactivate: function(){
        this.controllerFor('thing').setProperties({
            'editMode': false,
            'deleteMode': false
        });
    }
});
