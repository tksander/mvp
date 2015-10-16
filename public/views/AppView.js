var AppView = Backbone.View.extend({

  el: '#app',

  // template: _.template ('<div class=".you-stat-container"></div> <div class=".challenger-stat-container"></div>'),

  initialize: function() {

    // var challengesCollection = 

    this.compare = new CompareView();

    this.input = new InputView({
      collection: this.model.get('challenges')
    });

    this.list = new ChallengeListView({
      collection: this.model.get('challenges')
    });

    this.render();
  },

  render: function() {

    this.$el.html([
      this.compare.$el,
      this.input.$el,
      this.list.$el
    ]);

    return this;
  }

});