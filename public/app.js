var App = Backbone.Model.extend({

  // create challenges
  initialize: function () {
    this.set('challenges', new Challenges());
  }
});