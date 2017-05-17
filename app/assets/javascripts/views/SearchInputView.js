var app = app || {};

app.SearchInputView = Backbone.View.extend({
    el: "#app",

    events: {
        "click #search-flights": "searchFlights",
        "click #search-button": "render"
    },

    searchFlights: function() {
        var sv = new app.SearchView({
            collection: app.Flights
        });
        sv.render();
    },

    render: function() {
        var templatemarkup = $("#SearchViewTemplate").html();
        this.$el.html(templatemarkup);
    }
});
// add collection
