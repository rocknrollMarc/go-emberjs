App.BlogEditRoute = App.BlogCreateAndEditRoute.extend({
    model: function() {
        return this.modelFor('blog');
    },
    actions: {
        goBack: function(){
            this.transitionTo('blog');
        }
    }
});
