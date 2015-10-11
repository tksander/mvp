var InputView = Backbone.View.extend({

  tagName: 'input',
  // el: '<input>',

  events: {
    'keydown': 'keyAction',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.resetInput();
    return this;
  },

  keyAction: function(e) {
    var isEnterKey = (e.which === 13);

    if(isEnterKey) {
      console.log(this.$el.val());
      this.collection.addChallenge(this.$el.val());
      this.resetInput();
    }
  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'Enter a new challenge'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});
