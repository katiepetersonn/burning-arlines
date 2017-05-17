var app = app || {};

app.SearchInputView = Backbone.View.extend({
    el: "#app",

    events: {
        "click button": "searchFlights"
    },

    searchFlights: function() {
<<<<<<< HEAD
        var from = $("#from").val();
        var to = $("#to").val();
        
=======
        // var from = $("#from").val();
        // var to = $("#to").val();
        var sv = new app.SearchView({
            model: app.Flight
        });
        sv.render();
>>>>>>> d75d6af3643c56f1d1fb647519aa750c4f321683
        // TODO: Add search flights functionality
    },

    render: function() {
        var templatemarkup = $("#SearchViewTemplate").html();
        this.$el.html(templatemarkup);
    }
});
