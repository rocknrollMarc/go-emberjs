// no need of a home page so we redirect "/" to "/things"
App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('things');
    }
});
