var StatEntry = Backbone.Model.extend({

  // Add additional categories
  defaults: {
    data: [
      ['distance', 0],
      ['elapsed_time', 1],
      ['calories', 2],
      ['max_speed', 3]
    ],
    currentStatIndex: 0,
    currentStat: 0
  },

  intialize: function() {
    // Initialize stat
  },

  toggleStat: function() {


    var currentStatIndex = this.get('currentStatIndex');

    // Toggle to the next stat
    currentStatIndex = currentStatIndex +  1;
    console.log(currentStatIndex);
    this.set({
      'currentStat': this.get('data')[currentStatIndex][1]
    });
  }
});