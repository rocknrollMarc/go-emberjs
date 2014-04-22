App.BlogsCreateController = Ember.Controller.extend({
  needs: ['blog'],

  actions: {
    save: function () {
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
