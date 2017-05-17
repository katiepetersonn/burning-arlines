var app = app || {};

app.SearchInputView = Backbone.View.extend({
    el: "#app",

    events: {
        "click button": "searchFlights"
    },

    searchFlights: function() {

        var from = $("#from").val();
        var to = $("#to").val();

        // var from = $("#from").val();
        // var to = $("#to").val();
        var sv = new app.SearchView({
            model: app.Flight
        });
        sv.render();
        // TODO: Add search flights functionality
    },

    render: function() {
        var templatemarkup = $("#SearchViewTemplate").html();
        this.$el.html(templatemarkup);
    }
});
