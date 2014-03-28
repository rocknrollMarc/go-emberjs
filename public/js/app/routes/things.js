App.ThingsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('thing');
  }
});
