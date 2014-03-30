App.ThingController = Ember.ObjectController.extend({
  // editMode / deleteMode properties are used in the thing template
  // we use them to manage css transitions when entering and exiting the edit route
  // see also the ThingCreateAndEditRoute for more
  editMode: false,

  deleteMode: false,
  needs: ['thing'],

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
        this.transitionToRoute('things');
        this.set('deleteMode', false);
      }.bind(this));
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
