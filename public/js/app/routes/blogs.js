App.BlogsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('blog');
  }
});
