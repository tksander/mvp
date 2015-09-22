var Challenges = Backbone.Collection.extend({

  model: Challenge,

  addChallenge: function(challengeText) {
    console.log(challengeText)
    this.add({challengeText: challengeText});
  }
});