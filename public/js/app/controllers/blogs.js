App.BlogsController = Em.ArrayController.extend({
  // here we tell the controller to sort Blogs by alphabetical order
  sortProperties: ['name'],
  sortAscending: true,
  // blogsCount is a computed property that returns the number of blogs
  blogsCount: function(){
    return this.get('model.length');
  }.property('@each')
});
