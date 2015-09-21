var Stats = Backbone.Collection.extend({

  model: WeatherEntry,

  // method to add stat to get new stat data
  // this will eventually pull data from the db
  getStatData: function() {

    // For now, grab stat data from local file activity_data.json
    

  }.bind(this);


});