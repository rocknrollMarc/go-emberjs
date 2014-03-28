App.Router.map(function() {
  this.resource('things', function(){
    this.resource('thing', { path:'/:thing_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  this.route('missing', { path: '/*path' });
});

App.MissingRoute = Em.Route.extend({
  redirect: function(){
    this.transitionTo('things.index');
  }
});
