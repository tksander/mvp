var AppView = Backbone.View.extend({

  el: '#app',

  // template: _.template ('<div class=".you-stat-container"></div> <div class=".challenger-stat-container"></div>'),

  initialize: function() {

    // instantiate the compare view
    this.compare = new CompareView();
    console.log("app view, showing this.compare")
    console.log(this.compare);

    this.render();
  },

  render: function() {

    this.$el.html([
      this.compare.$el
    ]);


    // For potential chaining?
    return this;
  }

});