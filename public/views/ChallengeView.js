var ChallengeView = Backbone.View.extend({

  className: 'challenge',

  template: _.template('<p> <=% text %> </p>'),

  events: {
    'click': 'clickAction'
  },

  clickAction: function () {
    this.model.destroy();
    this.remove();
  },


  initialize: function () {

    this.listenTo(this.model, 'change', this.render);
    this.render();

  },

  render: function () {
    this.$el.html(this.model.get('challengeText'));
  }


});
