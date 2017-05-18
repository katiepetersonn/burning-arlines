var app = app ||{};

app.SearchView = Backbone.View.extend({
  tagName: 'li',

  render: function () {
    var flight = this.model;
    var templateMarkup = $("#flightListView").html();
    var actualTemplate = _.template(templateMarkup)(flight.toJSON());
    this.$el.html(actualTemplate);
    this.$el.appendTo("#search-results");
  }
});
