var app = app ||{};

app.SearchView = Backbone.View.extend({
  tagName: 'li', //Create a new element 'li' for each instance of this view.
  events: {
    'click': 'showFlight'
  },
  showFlight: function () {
    console.log('nav to flight', this.model.get('id'));
    app.router.navigate('flights/' + this.model.get('id'), true);
  },
  render: function () {
    this.$el.text( this.model.get('date'));
    this.$el.appendTo('#search-results');
  }
});
