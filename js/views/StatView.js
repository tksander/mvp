var StatView = Backbone.View.extend({
    
    id: 'stat',

    intialize: function() {
      // Listen to click event and re-render
      // this.listenTo(this.collection, ???, this.render);
    },

    // method to iterate over the data in the model


    render: function() {

      // Removes the children of the $el element
      // Note sure why we need this 
      this.$el.empty();



    }

});