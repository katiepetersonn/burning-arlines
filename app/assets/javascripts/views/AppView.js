var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

    events: {
    "click #search-flights": "filterFlights"
  },

  filterFlights: function() {
    var from = $("#from").val();
    var to = $("#to").val();
    var filterOne = this.collection.where({origin: "origin 0"});
    var filterTwo = _.each(filterOne, function(i) {
      debugger;
       return _.where(i, {destination: "destination 1"});
    });

    console.log(filterTwo);
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
