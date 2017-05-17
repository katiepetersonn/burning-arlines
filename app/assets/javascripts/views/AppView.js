// var app = app || {};
//
// app.AppView = Backbone.View.extend({
//     el: "#app",
//
//     render: function() {
//         var fv = new app.FlightView();
//         fv.render();
//     }
// });

var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  initialize: function () {
  console.log("A new view was created");
  },

  render: function () {
    var  appViewTemplate = $('#appViewTemplate').html();
    this.$el.html(appViewTemplate);

    // var searchInputView = new app.searchInputView();
    // searchInputView.render();
  }
  });
