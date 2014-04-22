App.BlogRoute = Ember.Route.extend({
    model: function(params) { 
        return this.store.find('blog', params.blog_id);
    },
});
