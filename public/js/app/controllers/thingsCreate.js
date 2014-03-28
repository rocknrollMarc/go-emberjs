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
