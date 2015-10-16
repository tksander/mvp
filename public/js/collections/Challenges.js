var Challenges = Backbone.Collection.extend({

  model: Challenge,

  addChallenge: function(challengeText) {
    this.add({challengeText: challengeText});
  }
});