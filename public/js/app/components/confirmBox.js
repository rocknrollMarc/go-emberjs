App.ConfirmBoxComponent = Ember.Component.extend({

    isVisible: false,

    actions: {
      cancelDelete: function(){
        this.toggleProperty('isVisible');
      },

      confirmDelete: function(){
        this.sendAction('action', this.get('param'));
      }
    }
});
