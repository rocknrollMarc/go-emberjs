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
      // this will save modifications we made while editing the thing
      thing.save();
      // then transition to ThingRoute
      this.transitionToRoute('thing', thing);
    }
  }
});