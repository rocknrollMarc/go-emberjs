App.ThingEditController = Ember.ObjectController.extend({
  // we want this controller to inherit from another controller
  // in this case it's thingController
  // http://emberjs.com/guides/controllers/dependencies-between-controllers/
  // http://darthdeus.github.com/blog/2013/01/27/controllers-needs-explained/
  needs: ['thing'],

  // in the template we used an {{action "save"}} wich will trigger these methods on click
  actions: {
    save: function(){
      var thing = this.get('model');
      thing.save().then(function() {
        this.transitionToRoute('thing', thing);
      }.bind(this));
    },
    cancel: function(){
      this.setProperties({ 'editMode': false, 'deleteMode': false });
      this.transitionToRoute('thing', this.get('model'));
    }
  }
});
