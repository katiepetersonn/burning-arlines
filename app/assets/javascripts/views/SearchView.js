var app = app || {};

app.SearchView = Backbone.View.extend({
    tagName: "li",

    render: function() {
        // debugger;
        var from = $("#from").val();
        var to = $("#to").val();
        
        this.$el.html(from);
        this.$el.html(to);
        this.$el.prependTo("#search-results");    
    }
});