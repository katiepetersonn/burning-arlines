// var app = app || {};
//
// app.router = new app.AppRouter();
//
// $(function() {
//     Backbone.history.start();
//
//     app.flights = new app.Flights();
//     app.flights.fetch();
// });



var app = app || {};

app.flightList = new app.Flights();

$(document).ready(function () {

  app.flights = new app.Flights();
  app.flights.fetch().done(function () {

    app.router = new app.AppRouter();
    Backbone.history.start();

    var appView = new app.AppView({ });
    appView.render();
  });




});
