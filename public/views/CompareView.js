var CompareView = Backbone.View.extend({

  id: 'compare',

  initialize: function() {
    // instantiate the compare view

    // Instatiate the You view
    this.stat = new StatView({
      model: new StatEntry()
    });

    // Instantiate the Challenger view
    this.statChallenger = new StatChallengerView({
      model: new StatEntryChallenger()
    });

    this.render();
  },

  render: function() {

    this.$el.append([
      this.stat.$el,
      this.statChallenger.$el
    ]);

    return this;
  }
});