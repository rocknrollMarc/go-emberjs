// only inherit from the DraggableView
App.BlogView = App.DraggableView.extend({

    didInsertElement: function(){
        // the didInsertElement hook is the guarantee that the view is in the DOM. 
        // So from here, you can perform any DOM manipulation 
        // or what ever you want with or without jQuery.
    }
});