var app = app ||{};

app.SearchView = Backbone.View.extend({
  tagName: 'li', //Create a new element 'li' for each instance of this view.

  events: {
    "click #search-flights": "showFlights"
  },

  showFlights: function() {
    
  },

  render: function () {
    this.$el.text( "test");
    this.$el.appendTo('#search-results');
  }
});
