var AppView = Backbone.View.extend({

  el: '#app',

  // template: _.template ('<div class=".you-stat-container"></div> <div class=".challenger-stat-container"></div>'),

  initialize: function() {

    // instantiate the compare view
    this.compare = new CompareView();

    this.input = new InputView({
      collection: new Challenges()
    });

    this.list = new ChallengeListView({
      collection: new Challenges() 
    });

    this.render();
  },

  render: function() {

    this.$el.html([
      this.compare.$el,
      this.list.$el
    ]);


    // For potential chaining?
    return this;
  }

});