App.BlogController = Ember.ObjectController.extend({
  // editMode / deleteMode properties are used in the blog template
  // we use them to manage css transitions when entering and exiting the edit route
  // see also the BlogCreateAndEditRoute for more
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
