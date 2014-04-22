App.ApplicationRoute = Em.Route.extend({
    actions: {
        showModal: function(name){
            this.controllerFor(name).set('modalVisible', true);
        },
        goBack: function(){
            this.transitionTo('blogs');
        }
    }
});
