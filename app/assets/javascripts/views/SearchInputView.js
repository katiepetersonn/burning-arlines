var app = app || {};


app.SearchInputView = Backbone.View.extend({
    el: "#app",

    events: {
        "click button": "searchFlights"
    },

    searchFlights: function() {
        var from = $("#from").val();
        var to = $("#to").val();
        // TODO: Add search flights functionality
    },

    render: function() {
        var templatemarkup = $("#SearchViewTemplate").html();
        this.$el.html(templatemarkup);
    }
});
