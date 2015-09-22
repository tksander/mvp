var StatEntry = Backbone.Model.extend({

  // Add additional categories
  defaults: {
    data: [
      ['Distance traveled', 56],
      ['Total Elapsed Time', 57],
      ['Calories Burned', 58],
      ['Maximum Speed', 59]
    ],
    currentStatIndex: 0,
    currentStat: 0,
    currentStatTextIndex: 0,
    currentStatText: 0,
  },

  intialize: function() {
    console.log('init')
    // Initialize the stat to first stat in array
    this.setStat(0,0);
  },

  iterateStat: function() {

    // Iterate the current stat for rendering
    var currentStatIndex = this.get('currentStatIndex');
    currentStatIndex = currentStatIndex + 1;
    this.set('currentStatIndex', currentStatIndex);


    // Iterate the current stat text for rendering
    var currentStatTextIndex = this.get('currentStatIndex');
    currentStatTextIndex = currentStatTextIndex + 1;
    this.set('currentStatTextIndex', currentStatTextIndex);
    
    this.setStat(currentStatIndex, currentStatTextIndex);
  },

  setStat: function (currentStatIndex, currentStatTextIndex) {
    console.log("init fire")
    this.set({
      'currentStatTextIndex': this.get('data')[currentStatTextIndex][0]
    });

    this.set({
      'currentStat': this.get('data')[currentStatIndex][1]
    });

  } 
});


// NOTE TO SELF: working on getting statview to 
// pull from data array to get proper text. 
// potentially setup a conditional statment
// on statview side to render proper text