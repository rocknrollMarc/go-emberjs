App.BlogsCreateRoute = App.BlogCreateAndEditRoute.extend({
    model: function(){
        return this.store.createRecord('blog');
    },

    renderTemplate: function(){
        this.render('blog.edit', {
            controller: 'blogsCreate'
        });
    }
});
