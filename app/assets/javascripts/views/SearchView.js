var app = app ||{};

app.SearchView = Backbone.View.extend({
  tagName: 'li', //Create a new element 'li' for each instance of this view.

  // events: {
  //   "click #search-flights": "filterFlights"
  // },

  // filterFlights: function() {
  //   var from = $("#from").val();
  //   var to = $("#to").val();

  // },

  render: function () {
    var flight = this.model;
    var templateMarkup = $("#flightListView").html();
    var actualTemplate = _.template(templateMarkup)(flight.toJSON());
    this.$el.html(actualTemplate);
    this.$el.appendTo("#search-results");
  }
});
