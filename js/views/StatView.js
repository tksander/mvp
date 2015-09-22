var StatView = Backbone.View.extend({
    
  id: 'stat',

  template: _.template('<p> Your max speed is <%= maxSpeed %> </p>'),

  events: {
    'click': 'clickAction'
  },


  initialize: function() {
    alert('statview')
    // Listen to click event and re-render - not sure what this will do
    this.listenTo(this.model, 'change', this.render);
    this.render()
  },

  // method to iterate over the data in the model
  nextStat: function() {

  },

  clickAction: function () {

  },

  render: function() {
    alert('rendering statview')
    var statEntry = this.template({
      maxSpeed: this.model.get('max_speed')
    });
    console.log(statEntry);

    // render the statEntry to the DOM
    this.$el.html(statEntry);

    return this;
  }


});