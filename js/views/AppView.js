var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.stat = new StatView({
      model: this.model
    });

    this.render();
  },

  render: function() {

    this.$el.append([
      this.stat.$el
    ]);


    // For potential chaining?
    return this;
  }

});