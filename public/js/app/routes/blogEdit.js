// the BlogEditRoute is an extend of the BlogCreateAndEditRoute
App.BlogEditRoute = App.BlogCreateAndEditRoute.extend({
    model: function() {
        // here we tell the route to use its parent model
        return this.modelFor('blog');
    },
    actions: {
        goBack: function(){
            this.transitionTo('blog');
        }
    }
});
