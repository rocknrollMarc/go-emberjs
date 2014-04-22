App.BlogEditController = Ember.ObjectController.extend({
  needs: ['blog'],

  actions: {
    save: function(){
      var blog = this.get('model');
      blog.save().then(function() {
        this.transitionToRoute('blog', blog);
      }.bind(this));
    },
    cancel: function(){
      this.setProperties({ 'editMode': false, 'deleteMode': false });
      this.transitionToRoute('blog', this.get('model'));
    }
  }
});
