var StatEntry = Backbone.Model.extend({

  // Add additional categories
  defaults: {
    data: [
      ['distance', 56],
      ['elapsed_time', 57],
      ['calories', 58],
      ['max_speed', 59]
    ],
    currentStatIndex: 0,
    currentStat: 0
  },

  intialize: function() {
    // Initialize stat
  },

  toggleStat: function() {

    var currentStatIndex = this.get('currentStatIndex');
    currentStatIndex = currentStatIndex + 1;
    // Toggle to the next stat
    this.set('currentStatIndex', currentStatIndex );
    this.set({
      'currentStat': this.get('data')[currentStatIndex][1]
    });
  }
});


// NOTE TO SELF: working on getting statview to 
// pull from data array to get proper text. 
// potentially setup a conditional statment
// on statview side to render proper text