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
    console.log('getData called')
    // $.ajax('localhost:4568/athleteProfile', function(result) {
    //   console.log('result', result);
    // })

    $.ajax({
      url: "http://localhost:4568/ahleteProfile"
    })
      .done(function( data ) {
          console.log(data);
      });

    var dataArray = this.get('data');
    var jsonNames = [
                    'distance',
                    'moving_time',
                    'calories',
                    'max_speed'
                    ];
    var tempDatastore = this.tempDatastore;

    // set the JSON name and num
    _.each(jsonNames, function (jsonName, index) {
      dataArray[index][1] = tempDatastore[jsonName];
      dataArray[index][2] = jsonName;
    })
  },

  // Temp fake data until server hooked up
  tempDatastore: {
  "id": 321934,
  "resource_state": 3,
  "external_id": "2012-12-12_21-40-32-80-29011.fit",
  "upload_id": 361720,
  "athlete": {
    "id": 227615,
    "resource_state": 1
  },
  "name": "12/12/2012 San Francisco",
  "description": "the best ride ever",
  "distance": 6426.3,
  "moving_time": 773,
  "elapsed_time": 1333,
  "total_elevation_gain": 8.6,
  "type": "Run",
  "start_date": "2012-12-13T03:43:19Z",
  "start_date_local": "2012-12-12T19:43:19Z",
  "timezone": "(GMT-08:00) America/Los_Angeles",
  "start_latlng": [
    37.8,
    -122.27
  ],
  "end_latlng": [
    37.8,
    -122.27
  ],
  "location_city": "San Francisco",
  "location_state": "CA",
  "location_country": "United States",
  "achievement_count": 6,
  "kudos_count": 1,
  "comment_count": 1,
  "athlete_count": 1,
  "photo_count": 0,
  "total_photo_count": 0,
  "photos": {
    "count": 2,
    "primary": {
      "id": null,
      "source": 1,
      "unique_id": "d64643ec9205",
      "urls": {
        "100": "http://pics.com/28b9d28f-128x71.jpg",
        "600": "http://pics.com/28b9d28f-768x431.jpg"
      }
    }
  },
  "map": {
    "id": "a32193479",
    "polyline": "kiteFpCBCD]",
    "summary_polyline": "{cteFjcaBkCx@gEz@",
    "resource_state": 3
  },
  "trainer": false,
  "commute": false,
  "manual": false,
  "private": false,
  "flagged": false,
  "workout_type": 2,
  "gear": {
    "id": "g138727",
    "primary": true,
    "name": "Nike Air",
    "distance": 88983.1,
    "resource_state": 2
  },
  "average_speed": 3.4,
  "max_speed": 7.524,
  "calories": 720.1,
  "has_kudoed": false,
  "segment_efforts": [
    {
      "id": 543755075,
      "resource_state": 2,
      "name": "Dash for the Ferry",
      "segment": {
        "id": 2417854,
        "resource_state": 2,
        "name": "Dash for the Ferry",
        "activity_type": "Run",
        "distance": 1055.11,
        "average_grade": -0.1,
        "maximum_grade": 2.7,
        "elevation_high": 4.7,
        "elevation_low": 2.7,
        "start_latlng": [
          37.7905785,
          -122.27015622
        ],
        "end_latlng": [
          37.79536649,
          -122.2796434
        ],
        "climb_category": 0,
        "city": "Oakland",
        "state": "CA",
        "country": "United States",
        "private": false
      },
      "activity": {
        "id": 32193479,
        "resource_state": 1
      },
      "athlete": {
        "id": 3776,
        "resource_state": 1
      },
      "kom_rank": 2,
      "pr_rank": 1,
      "elapsed_time": 304,
      "moving_time": 304,
      "start_date": "2012-12-13T03:48:14Z",
      "start_date_local": "2012-12-12T19:48:14Z",
      "distance": 1052.33,
      "start_index": 5348,
      "end_index": 6485,
      "hidden": false,
      "achievements": [
        {
          "type_id": 2,
          "type": "overall",
          "rank": 2
        },
        {
          "type_id": 3,
          "type": "pr",
          "rank": 1
        }
      ]
    }
  ],
  "splits_metric": [
    {
      "distance": 1002.5,
      "elapsed_time": 276,
      "elevation_difference": 0,
      "moving_time": 276,
      "split": 1
    },
    {
      "distance": 475.7,
      "elapsed_time": 139,
      "elevation_difference": 0,
      "moving_time": 139,
      "split": 5
    }
  ],
  "splits_standard": [
    {
      "distance": 1255.9,
      "elapsed_time": 382,
      "elevation_difference": 3.2,
      "moving_time": 382,
      "split": 3
    }
  ],
  "best_efforts": [
    {
      "id": 273063933,
      "resource_state": 2,
      "name": "400m",
      "segment": null,
      "activity": {
        "id": 32193479
      },
      "athlete": {
        "id": 3776
      },
      "kom_rank": null,
      "pr_rank": null,
      "elapsed_time": 105,
      "moving_time": 106,
      "start_date": "2012-12-13T03:43:19Z",
      "start_date_local": "2012-12-12T19:43:19Z",
      "distance": 400,
      "achievements": [

      ]
    },
    {
      "id": 273063935,
      "resource_state": 2,
      "name": "1/2 mile",
      "segment": null,
      "activity": {
        "id": 32193479
      },
      "athlete": {
        "id": 3776
      },
      "kom_rank": null,
      "pr_rank": null,
      "elapsed_time": 219,
      "moving_time": 220,
      "start_date": "2012-12-13T03:43:19Z",
      "start_date_local": "2012-12-12T19:43:19Z",
      "distance": 805,
      "achievements": [

      ]
    }
  ]
}

});

