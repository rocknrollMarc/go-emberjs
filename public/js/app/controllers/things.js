App.ThingsController = Em.ArrayController.extend({
  // here we tell the controller to sort Things by alphabetical order
  sortProperties: ['name'],
  sortAscending: true,
  // thingsCount is a computed property that returns the number of things
  thingsCount: function(){
    return this.get('model.length');
  }.property('@each')
});
