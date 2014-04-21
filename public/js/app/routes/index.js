// no need of a home page so we redirect "/" to "/blogs"
App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('blogs');
    }
});
