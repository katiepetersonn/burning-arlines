var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

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
