App.BlogEditController = Ember.ObjectController.extend({
  // we want this controller to inherit from another controller
  // in this case it's blogController
  // http://emberjs.com/guides/controllers/dependencies-between-controllers/
  // http://darthdeus.github.com/blog/2013/01/27/controllers-needs-explained/
  needs: ['blog'],

  // in the template we used an {{action "save"}} wich will trigger these methods on click
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
