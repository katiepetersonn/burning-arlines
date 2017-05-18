var app = app ||{};

app.SearchView = Backbone.View.extend({
  tagName: 'li', //Create a new element 'li' for each instance of this view.

  events: {
    "click #search-flights": "filterFlights"
  },

  filterFlights: function() {
    // TODO: Add filter functionality
  },

  render: function () {

    this.$el.text(this.model.get("origin"));
    this.$el.appendTo('#search-results');
  }
});
