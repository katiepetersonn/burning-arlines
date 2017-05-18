var app = app || {};

app.FlightView = Backbone.View.extend({
  render: function() {
    var templateMarkup = $("#FlightsViewTemplate").html();
    this.$el.html(templateMarkup);
  }
});
