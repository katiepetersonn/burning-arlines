var app = app || {};

app.AppView = Backbone.View.extend({
    el: "#app",

    render: function() {
        var fv = new app.FlightView();
        fv.render();     
    }
});