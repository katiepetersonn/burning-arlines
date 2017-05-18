var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  events: {
    "click #search-flights": "filterFlights"
  },

  filterFlights: function() {
    var from = $("#from").val();
    var to = $("#to").val();
    if( from === "" || to === "") {
      return;
    } else {
      var matchedFlights = this.collection.filter(function (flight) {
        return flight.get("origin") === from && flight.get("destination") === to;
      });
      this.collection = new app.Flights( matchedFlights );
      this.render();
    }
  },

  render: function () {
    var templatemarkup = $("#SearchViewTemplate").html();
    this.$el.html(templatemarkup);
    this.collection.each(function(flight) {
      sv = new app.SearchView({
        model: flight
      });
      sv.render();
    });
  }
});
