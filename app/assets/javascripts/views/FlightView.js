var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#app",

  render: function() {
    var flight = this.model;
    var templateMarkup = $("#flightView").html();
    var actualTemplate = _.template(templateMarkup)(flight.toJSON());
    this.$el.html(actualTemplate);

    // var seatMap = document.getElementByID('');
    debugger;
  },



});
