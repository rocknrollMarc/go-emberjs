App.ThingsCreateController = Ember.Controller.extend({
  needs: ['thing'],

  actions: {
    save: function () {
      // create a new thing and save it
      this.get('model').save().then(function() {
        this.transitionToRoute('index');
      }.bind(this));
    },
    cancel: function(){
      this.get('model').deleteRecord();
      this.transitionToRoute('index');
    }
  }
});
