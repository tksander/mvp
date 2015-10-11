// var StatsView = Backbone.View.extend({

//   classname: 'stats',

//   template: _.template '<h2><% if(isDealer){ %>Dealer<% } else{ %>You<% } %> (<span class="score"></span>)</h2>',

//   initialize: function() {
//     this.collection.on('change', this.render);
//     this.render;
//   },


//   render: function() {
//     this.$el.children().detch();
//     this.$el.html.this.template.this.collection;
//     this.$el.append.this.collection.map(function (stat) {
//       new StatView(model: stat).$el
//     };
    
// });


//  render: ->
//     @$el.children().detach()
//     @$el.html @template @collection
//     @$el.append @collection.map (card) ->
//       new CardView(model: card).$el

//     @$('.score').text @collection.maxScore()