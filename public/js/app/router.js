App.Router.map(function() {
  this.resource('blogs', function(){
    this.resource('blog', { path:'/:blog_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  this.route('missing', { path: '/*path' });
});

App.MissingRoute = Em.Route.extend({
  redirect: function(){
    this.transitionTo('blogs.index');
  }
});
