App.BlogCreateAndEditRoute = Ember.Route.extend({
    activate: function(){
        this.controllerFor('blog').setProperties({
            'editMode': true,
            'deleteMode': false
        });
    },
    deactivate: function(){
        this.controllerFor('blog').setProperties({
            'editMode': false,
            'deleteMode': false
        });
    }
});
