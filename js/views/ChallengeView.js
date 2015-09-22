var ChallengeView = Backbone.View.extend({

  className: 'challenge',

  initialize: function() {

    this.listenTo(this.model, 'change', this.render);
    this.render();

  },

  render: function() {

    this.$el.html(this.challengeText);
  }


});
