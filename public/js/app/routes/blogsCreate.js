// the BlogsCreateRoute is an extend of the BlogCreateAndEditRoute
App.BlogsCreateRoute = App.BlogCreateAndEditRoute.extend({
    model: function(){
        // the model for this route is a new empty Ember.Object
        return this.store.createRecord('blog');
    },

    // in this case (the create route) we can re-use the blog/edit template
    // associated with the blogsCreateController
    renderTemplate: function(){
        this.render('blog.edit', {
            controller: 'blogsCreate'
        });
    }
});
