var StatEntry = Backbone.Model.extend({

  // Add additional categories
  defaults: {
    data: [ // (Render Text, Render Num, JSON name, Unit)
      ['Distance traveled', 56, 0],
      ['Total Elapsed Time', 57, 0],
      ['Calories Burned', 58, 0],
      ['Maximum Speed', 59, 0]
    ],
    currentDataIndex: 0,
    currentStat: 0,
    currentStatText: 0,
  },

  url: '/athleteProfile',

  parse: function(response) {
    console.log('Parse response ', response);
    // return response.results;
  },

  intialize: function() {
    this.model.getData();
  },

  iterateStat: function() {

    var dataLength = this.get('data').length;

    // Iterate through the data index for rendering
    var currentDataIndex = this.get('currentDataIndex');
    currentDataIndex = (currentDataIndex + 1) % dataLength;
    this.set('currentDataIndex', currentDataIndex);

    this.setStat(currentDataIndex, currentDataIndex);
  },

  setStat: function (currentDataIndex) {

    this.set({
      'currentStat': this.get('data')[currentDataIndex][1]
    });
    this.set({
      'currentStatText': this.get('data')[currentDataIndex][0]
    });
  }, 

  // This will eventually fetch the data from the database
  getData: function () {
    console.log('Getting Data');

    that = this;
    this.fetch({
        success: function (stuff) {
          console.log('Stuff ', stuff);
        }
    });



    // var dataArray = this.get('data');

  //   var jsonNames = [
  //                   'distance',
  //                   'moving_time',
  //                   'calories',
  //                   'max_speed'
  //                   ];
  //   var tempDatastore = this.tempDatastore;



  //   // set the JSON name and num
  //   _.each(jsonNames, function (jsonName, index) {
  //     dataArray[index][1] = tempDatastore[jsonName];
  //     dataArray[index][2] = jsonName;
  //   })

  }


});

