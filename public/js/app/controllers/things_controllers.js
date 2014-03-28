App.ThingsController = Em.ArrayController.extend({
  // here we tell the controller to sort Things by alphabetical order
  sortProperties: ['name'],
  sortAscending: true,
  // thingsCount is a computed property that returns the number of things
  thingsCount: function(){
    return this.get('model.length');
  }.property('@each')
});
App.ThingController = Ember.ObjectController.extend({
  // editMode / deleteMode properties are used in the thing template
  // we use them to manage css transitions when entering and exiting the edit route
  // see also the ThingCreateAndEditRoute for more
  editMode: false,

  deleteMode: false,

  actions: {
    delete: function(){
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      // delete a thing
      this.get('model').deleteRecord();
      this.get('model').save();
      // then transition to the ThingsRoute
      this.transitionToRoute('things');
      // set deleteMode back to false
      this.set('deleteMode', false);
    }
  },
  edit: function(){
    this.setProperties({
      'editMode': true,
      'deleteMode': false
    });
    this.transitionToRoute('thing.edit');
  }
});

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
App.ThingsCreateController = Ember.ObjectController.extend({
  needs: ['thing'],

  actions: {
    save: function () {
      // just before saving, we set the creationDate
      this.get('model').set('creationDate', new Date());
      // create a new thing and save it
      var newThing = this.store.createRecord('thing', this.get('model'));
      newThing.save();

      // redirects to the thing itself
      this.transitionToRoute('thing', newThing);
    }
  }
});
