var StatView = Backbone.View.extend({
    
  id: 'stat',

  template: _.template('<p> Your max speed was <%= currentStat %> </p>'),

  events: {
    'click': 'clickAction'
  },


  initialize: function() {
    this.render()
  },

  // method to iterate over the data in the model
  nextStat: function() {

  },

  // Toggles stat on
  clickAction: function () {
    this.model.toggleStat();
  },

  render: function() {
    var statEntry = this.template({
      currentStat: this.model.get('currentStat')
    });
    console.log(statEntry);

    // render the statEntry to the DOM
    this.$el.html(statEntry);

    return this;
  }


});