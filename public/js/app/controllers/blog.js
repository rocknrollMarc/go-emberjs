App.BlogController = Ember.ObjectController.extend({
  editMode: false,

  deleteMode: false,
  needs: ['blog'],

  actions: {
    delete: function(){
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      this.get('model').deleteRecord();
      this.get('model').save().then(function() {
        this.transitionToRoute('blogs');
        this.set('deleteMode', false);
      }.bind(this));
    }
  },
  edit: function(){
    this.setProperties({
      'editMode': true,
      'deleteMode': false
    });
    this.transitionToRoute('blog.edit');
  }
});
