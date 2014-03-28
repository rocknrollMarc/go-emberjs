App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api'
});

App.Store = DS.Store.extend({
  adapter: "App.ApplicationAdapter",
});

App.Router.map(function() {
  this.resource('things', function(){
    this.resource('thing', { path:'/:thing_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});

App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('things');
    }
});
