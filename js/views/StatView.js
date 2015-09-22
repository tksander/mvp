var StatView = Backbone.View.extend({
    
  id: 'stat',

  template: _.template('<div class="statText"> <%= statText %> </div> <div class="stat"> <%= stat %> </div>'),

  events: {
    'click': 'clickAction'
  },


  initialize: function() {

    // Setup intial state of model
    this.model.getData();
    this.model.setStat(0)

    this.listenTo(this.model, "change", this.render),
    this.render()
  },

  // method to iterate over the data in the model
  nextStat: function() {

  },

  // Iterates through stats
  clickAction: function () {
    this.model.iterateStat();
  },

  render: function() {

    // Create array of array strings


    var statEntry = this.template({
      statText: this.model.get('currentStatText'),
      stat: this.model.get('currentStat')
    });

    // render the statEntry to the DOM
    this.$el.html(statEntry);

    return this;
  }



});