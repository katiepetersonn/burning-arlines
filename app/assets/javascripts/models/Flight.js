var app = app || {};

app.Flight = Backbone.Model.extend({
    urlRoot: "/search",

    defaults : {
        flight_number: "0",
        origin: "No origin",
        destination: "No desitationi",
        flight_date: Date.now(),
        airplane_id: 0
    }
});
