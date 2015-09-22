var AppView = Backbone.View.extend({

  el: '#app',

  template: _.template ('<div class=".you-stat-container"></div> <div class=".challenger-stat-container"></div>'),

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