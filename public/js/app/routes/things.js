App.ThingsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('thing');
  }
});
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
