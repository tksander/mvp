var StatView = Backbone.View.extend({
    
  id: 'stat',

  template: _.template('<p> Your max speed was <%= Stat %> </p>'),

  events: {
    'click': 'clickAction'
  },


  initialize: function() {
    this.listenTo(this.model, "change", this.render),
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
    console.log('statview   ',this.model.get('currentStat'));
    var statEntry = this.template({
      Stat: this.model.get('currentStat')
    });

    // render the statEntry to the DOM
    this.$el.html(statEntry);

    return this;
  }


});